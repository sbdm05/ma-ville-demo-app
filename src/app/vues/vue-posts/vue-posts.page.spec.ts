import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VuePostsPage} from './vue-posts.page';

describe('PagePostsPage', () => {
  let component: VuePostsPage;
  let fixture: ComponentFixture<VuePostsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VuePostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
