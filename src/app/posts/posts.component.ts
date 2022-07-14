import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  filter: string = '';
  posts$ = this.appService.getPosts();


  constructor(private appService: AppService) { }

  ngOnInit() {
  }



}
