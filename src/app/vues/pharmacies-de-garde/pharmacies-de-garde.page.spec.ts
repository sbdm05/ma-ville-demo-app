import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PharmaciesDeGardePage } from './pharmacies-de-garde.page';

describe('PharmaciesDeGardePage', () => {
  let component: PharmaciesDeGardePage;
  let fixture: ComponentFixture<PharmaciesDeGardePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PharmaciesDeGardePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
