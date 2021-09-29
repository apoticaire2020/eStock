import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFournComponent } from './liste-fourn.component';

describe('ListeFournComponent', () => {
  let component: ListeFournComponent;
  let fixture: ComponentFixture<ListeFournComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFournComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFournComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
