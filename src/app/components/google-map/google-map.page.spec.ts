import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoogleMapPage } from './google-map.page';

describe('GoogleMapPage', () => {
  let component: GoogleMapPage;
  let fixture: ComponentFixture<GoogleMapPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GoogleMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
