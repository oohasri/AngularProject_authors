import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editAuthor: any;
  isError = false;
  errors: [];
  author= {name: ''};
  // author: {};
  constructor(private _httpService: HttpService,
              private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    this.editAuthor = {id : '', name: ''};
    this._route.params.subscribe((params: Params) => {
      this.editAuthor.id = params.id;
      this.getAuthor(params.id);
  });
  }
  getAuthor(id) {
    const observable = this._httpService.retrieveById(id);
    observable.subscribe((data: any) => {
      console.log('Got data to edit');
      console.log(data);
      this.author = data;
    });
  }
  edit(id, editBody) {
    console.log(id);
    console.log(editBody);
    const observable = this._httpService.update(id, editBody);
    observable.subscribe((data: any) => {
      console.log('data inserted');
      console.log(data);
      if ('errors' in data) {
        this.isError = true;
        this.errors = data.errors;
      }
      this._router.navigate(['/display']);
    });
  }

}
