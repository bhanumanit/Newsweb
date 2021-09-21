import { TestBed } from '@angular/core/testing';

import { NewswebserviceService } from './newswebservice.service';

describe('NewswebserviceService', () => {
  let service: NewswebserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewswebserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
