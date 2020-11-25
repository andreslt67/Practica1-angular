import { TestBed } from '@angular/core/testing';

import { JokeListServiceService } from './joke-list-service.service';

describe('JokeListServiceService', () => {
  let service: JokeListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokeListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
