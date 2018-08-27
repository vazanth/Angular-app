import { TestBed, inject } from '@angular/core/testing';

import { MediaDetaiGuardService } from './media-detai-guard.service';

describe('MediaDetaiGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaDetaiGuardService]
    });
  });

  it('should be created', inject([MediaDetaiGuardService], (service: MediaDetaiGuardService) => {
    expect(service).toBeTruthy();
  }));
});
