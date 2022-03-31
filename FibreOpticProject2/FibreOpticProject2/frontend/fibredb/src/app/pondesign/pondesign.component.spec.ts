import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PondesignComponent } from './pondesign.component';

describe('PondesignComponent', () => {
  let component: PondesignComponent;
  let fixture: ComponentFixture<PondesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PondesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PondesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
