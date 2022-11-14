import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaListadoProductComponent } from './tabla-listado-product.component';

describe('TablaListadoProductComponent', () => {
  let component: TablaListadoProductComponent;
  let fixture: ComponentFixture<TablaListadoProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaListadoProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaListadoProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
