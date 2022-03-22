import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/model';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userId:any= ''
posts:Post[]=[];
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts():void{
    this.homeService.getAll(this.userId).subscribe(r=>{this.posts=r;},error=>{console.log(error);});
  }

}
