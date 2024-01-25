import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VueSurveyPage } from './vue-survey.page';

describe('VueSurveyPage', () => {
  let component: VueSurveyPage;
  let fixture: ComponentFixture<VueSurveyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VueSurveyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
