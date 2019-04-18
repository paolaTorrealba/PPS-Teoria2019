import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApagarPage } from './apagar.page';

describe('ApagarPage', () => {
  let component: ApagarPage;
  let fixture: ComponentFixture<ApagarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApagarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApagarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
