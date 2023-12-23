import { TestBed } from '@angular/core/testing';

import { ItinerairesService } from './itineraires.service';

describe('ItinerairesService', () => {
  let service: ItinerairesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItinerairesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
