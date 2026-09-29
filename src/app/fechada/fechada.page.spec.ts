import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FechadaPage } from './fechada.page';

describe('FechadaPage', () => {
  let component: FechadaPage;
  let fixture: ComponentFixture<FechadaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FechadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
