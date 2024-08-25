import { TestBed } from '@angular/core/testing';

import { APIBrawlhallaService } from './api-brawlhalla.service';

describe('APIBrawlhallaService', () => {
  let service: APIBrawlhallaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIBrawlhallaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
