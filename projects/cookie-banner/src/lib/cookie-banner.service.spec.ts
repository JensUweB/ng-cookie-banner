import { TestBed } from '@angular/core/testing';

import { CookieService } from './cookie.service';

describe('CookieBannerService', () => {
  let service: CookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
