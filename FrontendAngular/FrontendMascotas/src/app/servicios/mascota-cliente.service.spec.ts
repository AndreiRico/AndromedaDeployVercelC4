import { TestBed } from '@angular/core/testing';

import { MascotaClienteService } from './mascota-cliente.service';

describe('MascotaClienteService', () => {
  let service: MascotaClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MascotaClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
