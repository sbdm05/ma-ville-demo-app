import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VueAgendaPage } from './vue-agenda.page';

describe('VueAgendaPage', () => {
  let component: VueAgendaPage;
  let fixture: ComponentFixture<VueAgendaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VueAgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
