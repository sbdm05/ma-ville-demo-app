import { TestBed } from '@angular/core/testing';

import { StorageCategoriesPreferenceService } from './storage-categories-preference.service';

describe('StorageCategoriesPreferenceService', () => {
  let service: StorageCategoriesPreferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageCategoriesPreferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
