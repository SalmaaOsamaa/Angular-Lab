import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplaterefValueComponent } from './templateref-value.component';

describe('TemplaterefValueComponent', () => {
  let component: TemplaterefValueComponent;
  let fixture: ComponentFixture<TemplaterefValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplaterefValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplaterefValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
