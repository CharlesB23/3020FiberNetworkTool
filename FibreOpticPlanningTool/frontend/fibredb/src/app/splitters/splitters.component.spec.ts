import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplittersComponent } from './splitters.component';

describe('SplittersComponent', () => {
  let component: SplittersComponent;
  let fixture: ComponentFixture<SplittersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplittersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
