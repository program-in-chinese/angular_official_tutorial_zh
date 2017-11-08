import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { 英雄Component } from './英雄.component';

describe('英雄Component', () => {
  let component: 英雄Component;
  let fixture: ComponentFixture<英雄Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 英雄Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(英雄Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
