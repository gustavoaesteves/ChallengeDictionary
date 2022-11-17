/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DictionaryAPIService } from './dictionaryAPI.service';

describe('Service: DictionaryAPI', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DictionaryAPIService]
    });
  });

  it('should ...', inject([DictionaryAPIService], (service: DictionaryAPIService) => {
    expect(service).toBeTruthy();
  }));
});
