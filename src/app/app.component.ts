import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'File Reader GUI';
  description = 'Upload as many files as you want and then press Get(you can do this after ' +
    'each added file and still get total for all uploaded text files),' +
    ' to filter them and then wait for a result to appear in the middle of the screen, ' +
    'after that you can press sorted files to download sorted by letter words with their count from all uploaded files';
}
