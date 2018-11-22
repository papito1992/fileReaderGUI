import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-details-up',
  templateUrl: './details-up.component.html',
  styleUrls: ['./details-up.component.css']
})
export class DetailsUpComponent implements OnInit {

  @Input()
  fileUpload: string;
  constructor() { }

  ngOnInit() {
  }

}
