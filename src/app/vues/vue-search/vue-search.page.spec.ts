import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VueSearchPage } from './vue-search.page';

describe('VueSearchPage', () => {
  let component: VueSearchPage;
  let fixture: ComponentFixture<VueSearchPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VueSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
