import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestartpassPage } from './restartpass.page';

describe('RestartpassPage', () => {
  let component: RestartpassPage;
  let fixture: ComponentFixture<RestartpassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestartpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
