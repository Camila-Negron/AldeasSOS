import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juedo2de3roComponent } from './juedo2de3ro.component';

describe('Juedo2de3roComponent', () => {
  let component: Juedo2de3roComponent;
  let fixture: ComponentFixture<Juedo2de3roComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Juedo2de3roComponent]
    });
    fixture = TestBed.createComponent(Juedo2de3roComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
