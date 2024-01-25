import { TestBed } from '@angular/core/testing';

import { NotificationsGuardService } from './notifications-guard.service';

describe('NotificationsGuardService', () => {
  let service: NotificationsGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationsGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
