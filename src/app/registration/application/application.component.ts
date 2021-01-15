import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
})
export class ApplicationComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  constructor() {}

  editorForm: FormGroup;

  editorStyle = {
    height: '200px',
  };

  ngOnInit() {
    this.editorForm = new FormGroup({
      editor: new FormControl(null),
    });
  }

  onSubmit() {}

  classFlag1 = false;
  classFlag2 = false;
  classFlag3 = false;
  classFlag4 = false;
  classFlag5 = false;

  onSubcategoryClicked1() {
    this.classFlag1 = !this.classFlag1;
  }
  onSubcategoryClicked2() {
    this.classFlag2 = !this.classFlag2;
  }
  onSubcategoryClicked3() {
    this.classFlag3 = !this.classFlag3;
  }
  onSubcategoryClicked4() {
    this.classFlag4 = !this.classFlag4;
  }
  onSubcategoryClicked5() {
    this.classFlag5 = !this.classFlag5;
  }

  public slide = 0;

  nextSlide() {
    if (this.slide < 5) {
      this.slide++;
    }
  }

  prevSlide() {
    if (this.slide > 0) {
      this.slide--;
    }
  }
}
