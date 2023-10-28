import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VueKiosquePage } from './vue-kiosque.page';

describe('VueKiosquePage', () => {
  let component: VueKiosquePage;
  let fixture: ComponentFixture<VueKiosquePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VueKiosquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
