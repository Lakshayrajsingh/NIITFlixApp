import { TestBed } from '@angular/core/testing';

import { LogincheckerGuard } from './loginchecker.guard';

describe('LogincheckerGuard', () => {
  let guard: LogincheckerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogincheckerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
