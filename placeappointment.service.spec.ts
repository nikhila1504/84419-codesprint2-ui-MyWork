import { TestBed } from '@angular/core/testing';

import { PlaceappointmentService } from './placeappointment.service';

describe('PlaceappointmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceappointmentService = TestBed.get(PlaceappointmentService);
    expect(service).toBeTruthy();
  });
});
