import { TestBed } from '@angular/core/testing';

import { CursoServiceService } from './curso.service';

describe('CursoServiceService', () => {
  let service: CursoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
