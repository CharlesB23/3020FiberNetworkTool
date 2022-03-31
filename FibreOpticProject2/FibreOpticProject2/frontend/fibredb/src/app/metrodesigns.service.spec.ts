import { TestBed } from '@angular/core/testing';

import { MetrodesignsService } from './metrodesigns.service';

describe('MetrodesignsService', () => {
  let service: MetrodesignsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetrodesignsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
