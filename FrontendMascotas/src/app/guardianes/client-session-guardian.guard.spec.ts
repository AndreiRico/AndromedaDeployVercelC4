import { TestBed } from '@angular/core/testing';

import { ClientSessionGuardianGuard } from './client-session-guardian.guard';

describe('ClientSessionGuardianGuard', () => {
  let guard: ClientSessionGuardianGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClientSessionGuardianGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
