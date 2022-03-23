import { TestBed } from '@angular/core/testing';

import { SplittersService } from './splitters.service';

describe('SplittersService', () => {
  let service: SplittersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SplittersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
