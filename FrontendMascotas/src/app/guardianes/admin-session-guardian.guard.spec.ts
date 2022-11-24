import { TestBed } from '@angular/core/testing';

import { AdminSessionGuardianGuard } from './admin-session-guardian.guard';

describe('AdminSessionGuardianGuard', () => {
  let guard: AdminSessionGuardianGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminSessionGuardianGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
