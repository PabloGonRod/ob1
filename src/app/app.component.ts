import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ob1';

  posts$: Observable<any[]>

  constructor(private dataService: DataServiceService) {

  }
  ngOnInit(): void {
    this.posts$ = this.dataService.getPosts()
  }
}
