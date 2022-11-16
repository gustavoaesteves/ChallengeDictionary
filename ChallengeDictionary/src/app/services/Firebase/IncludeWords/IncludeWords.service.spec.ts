/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IncludeWordsService } from './IncludeWords.service';

describe('Service: IncludeWords', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncludeWordsService]
    });
  });

  it('should ...', inject([IncludeWordsService], (service: IncludeWordsService) => {
    expect(service).toBeTruthy();
  }));
});
