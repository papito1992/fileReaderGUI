import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) {
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', '/post', formData, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }
  getFiles(): Observable<any> {
    return this.http.get('/getallfiles');
  }
}
