import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShortlistPage } from './shortlist.page';

describe('ShortlistPage', () => {
  let component: ShortlistPage;
  let fixture: ComponentFixture<ShortlistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShortlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
