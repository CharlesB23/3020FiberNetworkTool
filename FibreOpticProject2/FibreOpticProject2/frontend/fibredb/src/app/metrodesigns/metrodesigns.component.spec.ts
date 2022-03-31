import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetrodesignsComponent } from './metrodesigns.component';

describe('MetrodesignsComponent', () => {
  let component: MetrodesignsComponent;
  let fixture: ComponentFixture<MetrodesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetrodesignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetrodesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
