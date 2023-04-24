import { TestBed } from '@angular/core/testing';

import { FieldCheckerGuard } from './field-checker.guard';

describe('FieldCheckerGuard', () => {
  let guard: FieldCheckerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FieldCheckerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
