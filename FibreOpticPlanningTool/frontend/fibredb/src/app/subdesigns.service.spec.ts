import { TestBed } from '@angular/core/testing';

import { SubdesignsService } from './subdesigns.service';

describe('SubdesignsService', () => {
  let service: SubdesignsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubdesignsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
