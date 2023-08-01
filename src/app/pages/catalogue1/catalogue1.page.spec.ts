import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Catalogue1Page } from './catalogue1.page';

describe('Catalogue1Page', () => {
  let component: Catalogue1Page;
  let fixture: ComponentFixture<Catalogue1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Catalogue1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
