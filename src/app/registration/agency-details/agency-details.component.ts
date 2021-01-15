import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agency-details',
  templateUrl: './agency-details.component.html',
  styleUrls: ['./agency-details.component.css'],
})
export class AgencyDetailsComponent implements OnInit {
  codes = ['+91', '+92', '+93', '+94', '+95'];
  codeInputs;
  selected = new FormControl('valid');

  constructor() {}

  ngOnInit(): void {}
}
