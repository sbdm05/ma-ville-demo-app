import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonFabPage } from './ion-fab.page';

describe('IonFabPage', () => {
  let component: IonFabPage;
  let fixture: ComponentFixture<IonFabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IonFabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
