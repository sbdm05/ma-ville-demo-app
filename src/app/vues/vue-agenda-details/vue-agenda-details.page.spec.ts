import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VueAgendaDetailsPage } from './vue-agenda-details.page';

describe('VueAgendaDetailsPage', () => {
  let component: VueAgendaDetailsPage;
  let fixture: ComponentFixture<VueAgendaDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VueAgendaDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
