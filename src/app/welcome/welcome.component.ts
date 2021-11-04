import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  title = "Welcome To Revature!!"

  public likedCounter : number = 0;

  constructor() { }
  ngOnInit(): void {
  }
  public incrementLikedCounter(){
    this.likedCounter++;
    return this.likedCounter;
  }
  public decrementLikedCounter(){
    this.likedCounter--;
    return this.likedCounter;
  }
  public resetLikedCounter(){
    this.likedCounter =0;
    return this.likedCounter;
  }
}
