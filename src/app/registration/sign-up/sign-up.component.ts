import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  emailProvided = false;
  messageRead = false;
  continueClicked = false;

  emailProvidedFn() {
    this.emailProvided = true;
  }

  messageReadFn() {
    if (this.messageRead === true) {
      this.router.navigate(['country']);
    }
    this.messageRead = true;
  }

  continueClickedFn() {
    this.continueClicked = true;
    this.emailProvided = false;
  }
}
