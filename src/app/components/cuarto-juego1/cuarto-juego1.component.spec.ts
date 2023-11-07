import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartoJuego1Component } from './cuarto-juego1.component';

describe('CuartoJuego1Component', () => {
  let component: CuartoJuego1Component;
  let fixture: ComponentFixture<CuartoJuego1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuartoJuego1Component]
    });
    fixture = TestBed.createComponent(CuartoJuego1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
