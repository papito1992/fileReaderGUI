import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FileService} from '../file.service';

@Component({
  selector: 'app-list-up',
  templateUrl: './list-up.component.html',
  styleUrls: ['./list-up.component.css']
})
export class ListUpComponent implements OnInit {
  showFile = false;
  fileUps: Observable<string[]>;
  constructor(private uploadServc: FileService) { }

  ngOnInit() {
  }
  showFiles(enable: boolean) {
    this.showFile = enable;
    if (enable) {
      this.fileUps = this.uploadServc.getFiles();
    }
  }


}
