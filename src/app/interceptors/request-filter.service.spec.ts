import { TestBed, inject } from '@angular/core/testing';

import { RequestFilterService } from './request-filter.service';

describe('RequestFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestFilterService]
    });
  });

  it('should be created', inject([RequestFilterService], (service: RequestFilterService) => {
    expect(service).toBeTruthy();
  }));
});
