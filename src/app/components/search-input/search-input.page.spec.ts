import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchInputPage } from './search-input.page';

describe('SearchInputPage', () => {
  let component: SearchInputPage;
  let fixture: ComponentFixture<SearchInputPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
