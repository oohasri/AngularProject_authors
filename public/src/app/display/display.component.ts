import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  authors = [];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthors();
  }
  getAuthors() {
    this.authors = [];
    const observable = this._httpService.getAll();
    observable.subscribe(data => {
      console.log('Data retrived');
      for (const cake of data[Symbol.iterator]()) {
        this.authors.push(cake);
      }
      console.log(this.authors);
    });
  }
  onDelete(id) {
    console.log(id);
    const observable = this._httpService.delete(id);
    observable.subscribe(data => {
      console.log('Author removed');
      this.getAuthors();
    });
  }

}
