import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }
  create(authorBody) {
    return this._http.post('/author/new', authorBody);
  }
  getAll() {
    return this._http.get('/authors');
  }
  retrieveById(id) {
    return this._http.get('/author/' + id);
  }
  delete(id) {
    return this._http.delete('/author/delete/' + id);
  }
  update(id, editBody) {
    return this._http.put('/author/update/' + id, editBody);
  }
}
