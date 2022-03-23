import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdesignsComponent } from './subdesigns.component';

describe('SubdesignsComponent', () => {
  let component: SubdesignsComponent;
  let fixture: ComponentFixture<SubdesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubdesignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
