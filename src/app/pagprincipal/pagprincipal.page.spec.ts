import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagprincipalPage } from './pagprincipal.page';

describe('PagprincipalPage', () => {
  let component: PagprincipalPage;
  let fixture: ComponentFixture<PagprincipalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagprincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
