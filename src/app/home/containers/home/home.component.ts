import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  title:string = 'home';
  
  constructor(){}

  ngOnInit(): void {
  }

  updateTitle(value:string){
    console.log(`updateTitle: ${value}`);
    this.title = value;
  }
}
