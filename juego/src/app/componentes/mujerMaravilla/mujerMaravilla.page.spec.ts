import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MujerMaravillaPage } from './mujerMaravilla.page';

describe('PrimeraPage', () => {
  let component: MujerMaravillaPage;
  let fixture: ComponentFixture<MujerMaravillaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MujerMaravillaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MujerMaravillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
