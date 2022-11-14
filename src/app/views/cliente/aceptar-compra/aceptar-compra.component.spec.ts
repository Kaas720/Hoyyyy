import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptarCompraComponent } from './aceptar-compra.component';

describe('AceptarCompraComponent', () => {
  let component: AceptarCompraComponent;
  let fixture: ComponentFixture<AceptarCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AceptarCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AceptarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
