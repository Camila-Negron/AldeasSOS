import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartoJuego2Component } from './cuarto-juego2.component';

describe('CuartoJuego2Component', () => {
  let component: CuartoJuego2Component;
  let fixture: ComponentFixture<CuartoJuego2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuartoJuego2Component]
    });
    fixture = TestBed.createComponent(CuartoJuego2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
