import { TestBed } from '@angular/core/testing';

import { RepeatersService } from './repeaters.service';

describe('RepeatersService', () => {
  let service: RepeatersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepeatersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
