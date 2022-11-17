/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { WordsService } from './Words.service';

describe('Service: Words', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordsService]
    });
  });

  it('should ...', inject([WordsService], (service: WordsService) => {
    expect(service).toBeTruthy();
  }));
});
