import { TestBed } from '@angular/core/testing';

import { ListaImagenesService } from './lista-imagenes.service';

describe('ListaImagenesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaImagenesService = TestBed.get(ListaImagenesService);
    expect(service).toBeTruthy();
  });
});
