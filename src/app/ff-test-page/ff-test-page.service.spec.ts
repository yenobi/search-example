import { TestBed, inject } from '@angular/core/testing';

import { FfTestPageService } from './ff-test-page.service';

describe('FfTestPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FfTestPageService]
    });
  });

  it('should be created', inject([FfTestPageService], (service: FfTestPageService) => {
    expect(service).toBeTruthy();
  }));
});
