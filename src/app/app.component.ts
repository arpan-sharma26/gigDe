import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  public path;
  public userText = '';
  public buttonText = '';

  ngOnInit() {
    this.path = window.location.pathname;

    if (this.path === '/login' || this.path === '/') {
      this.userText = 'New User?';
      this.buttonText = 'Signup';
    } else if (
      this.path === '/signup' ||
      this.path === '/country' ||
      this.path === '/profession'
    ) {
      this.userText = 'Already have an account?';
      this.buttonText = 'Login';
    }
  }
}
