import { TestBed } from '@angular/core/testing';

import { AssessorSessionGuardianGuard } from './assessor-session-guardian.guard';

describe('AssessorSessionGuardianGuard', () => {
  let guard: AssessorSessionGuardianGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AssessorSessionGuardianGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
