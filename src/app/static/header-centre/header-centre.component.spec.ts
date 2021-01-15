import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCentreComponent } from './header-centre.component';

describe('HeaderCentreComponent', () => {
  let component: HeaderCentreComponent;
  let fixture: ComponentFixture<HeaderCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCentreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
