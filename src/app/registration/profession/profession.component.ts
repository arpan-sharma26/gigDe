import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.css'],
})
export class ProfessionComponent implements OnInit {
  buttonCounter = 0;
  termsOfService;
  gigDeEmails;
  changeText = false;
  changeTextFreelancer = false;
  freelancers = ['Agency', 'Business', 'Consultant'];

  enableClientButton() {
    const element = document.getElementById('btn1');
    element.style.backgroundColor = '#137ded';
    element.style.color = 'white';
    const element1 = document.getElementById('btn2');
    element1.style.backgroundColor = '#f2f2f2';
    element1.style.color = '#d2d2d2';
  }

  enableFreelanceButton() {
    const element = document.getElementById('btn2');
    element.style.backgroundColor = '#137ded';
    element.style.color = 'white';
    const element1 = document.getElementById('btn1');
    element1.style.backgroundColor = '#f2f2f2';
    element1.style.color = '#d2d2d2';
  }

  selectedValue: string;

  foods: string[] = [
    'Agency',
    'Consultant',
    'Company',
    'Business',
    'Freelancing',
    'Organization',
  ];

  constructor() {}

  ngOnInit(): void {
    this.changeText = false;
  }
}
