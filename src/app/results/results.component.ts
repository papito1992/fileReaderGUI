import {Component, OnInit} from '@angular/core';
import {FileService} from '../upload/file.service';
import {HttpClient} from '@angular/common/http';

import {map} from 'rxjs/operators';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  getResObject: Object = [];
  showWords: boolean;
  constructor(private uploadServc: FileService, private http: HttpClient) {
  }
  ngOnInit() {

  }

  getRes() {
    this.http.get('/getresults').pipe(map(gRes => {
      return gRes;
    })).subscribe(gRes => {
      this.getResObject = gRes;
      this.showWords = true;
    });
  }
}
