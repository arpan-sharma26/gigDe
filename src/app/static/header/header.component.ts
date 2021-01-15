import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public route: ActivatedRoute) {}

  // public path;
  // public userText = '';
  // public buttonText = '';

  ngOnInit(): void {
    // this.path = window.location.pathname;
    // console.log(this.path);
    // if (this.path === '/login' || this.path === '/') {
    //   this.userText = 'New User?';
    //   this.buttonText = 'Signup';
    // } else if (
    //   this.path === '/signup' ||
    //   this.path === '/country' ||
    //   this.path === '/profession'
    // ) {
    //   this.userText = 'Already have an account?';
    //   this.buttonText = 'Login';
    // }
  }
}
