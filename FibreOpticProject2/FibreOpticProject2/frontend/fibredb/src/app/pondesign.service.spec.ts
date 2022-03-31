import { TestBed } from '@angular/core/testing';

import { PondesignService } from './pondesign.service';

describe('PondesignService', () => {
  let service: PondesignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PondesignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
