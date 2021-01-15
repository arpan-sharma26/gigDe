import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWithShadowComponent } from './header-with-shadow.component';

describe('HeaderWithShadowComponent', () => {
  let component: HeaderWithShadowComponent;
  let fixture: ComponentFixture<HeaderWithShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderWithShadowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWithShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
