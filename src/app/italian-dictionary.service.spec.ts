import { TestBed } from '@angular/core/testing';

import { ItalianDictionaryService } from './italian-dictionary.service';

describe('ItalianDictionaryService', () => {
  let service: ItalianDictionaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItalianDictionaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
