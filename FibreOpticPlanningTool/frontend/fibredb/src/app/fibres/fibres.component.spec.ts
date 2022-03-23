import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibresComponent } from './fibres.component';

describe('FibresComponent', () => {
  let component: FibresComponent;
  let fixture: ComponentFixture<FibresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
