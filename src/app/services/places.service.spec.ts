import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';

import { PlacesService } from './places.service';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

describe('PlacesService', () => {
  let service: PlacesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        PlacesService,
        AngularFireDatabase,
        AngularFireDatabaseModule,
        FirebaseApp,
        AngularFireModule
      ]
    });

    service = TestBed.get(PlacesService);
  }));

  // it('should be created', inject([PlacesService], (service: PlacesService) => {
  //   expect(service).toBeTruthy();
  // }));

  it('should use PlacesService', () => {
    expect(service).toBeTruthy();
  });
});
