import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OltsComponent } from './olts.component';

describe('OltsComponent', () => {
  let component: OltsComponent;
  let fixture: ComponentFixture<OltsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OltsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
