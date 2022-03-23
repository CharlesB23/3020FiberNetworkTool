import { TestBed } from '@angular/core/testing';

import { OltsService } from './olts.service';

describe('OltsService', () => {
  let service: OltsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OltsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
