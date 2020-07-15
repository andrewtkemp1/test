import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  public token: string;
  constructor() { }

  ngOnInit(): void {
    this.token = localStorage.getItem('jwt');
  }

}
