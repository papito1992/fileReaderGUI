import {Component, OnInit} from '@angular/core';
import {FileService} from '../file.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';
@Component({
  selector: 'app-form-up',
  templateUrl: './form-up.component.html',
  styleUrls: ['./form-up.component.css']
})
export class FormUpComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = {percentage: 0};

  constructor(private uploadServc: FileService) {
  }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadServc.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File Loaded');
      }
    });
    this.selectedFiles = undefined;
  }
}
