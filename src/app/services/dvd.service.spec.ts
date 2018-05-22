import { TestBed, inject } from '@angular/core/testing';

import { DvdService } from './dvd.service';

describe('DvdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DvdService]
    });
  });

  it('should be created', inject([DvdService], (service: DvdService) => {
    expect(service).toBeTruthy();
  }));
});
