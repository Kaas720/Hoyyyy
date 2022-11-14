import { TestBed } from '@angular/core/testing';

import { TareasHttpService } from './tareas-http.service';

describe('TareasHttpService', () => {
  let service: TareasHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareasHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
