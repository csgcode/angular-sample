import { TestBed, inject } from '@angular/core/testing';

import { ProserviceService } from './proservice.service';

describe('ProserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProserviceService]
    });
  });

  it('should be created', inject([ProserviceService], (service: ProserviceService) => {
    expect(service).toBeTruthy();
  }));
});
