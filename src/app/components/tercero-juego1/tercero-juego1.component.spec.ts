import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceroJuego1Component } from './tercero-juego1.component';

describe('TerceroJuego1Component', () => {
  let component: TerceroJuego1Component;
  let fixture: ComponentFixture<TerceroJuego1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerceroJuego1Component]
    });
    fixture = TestBed.createComponent(TerceroJuego1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
