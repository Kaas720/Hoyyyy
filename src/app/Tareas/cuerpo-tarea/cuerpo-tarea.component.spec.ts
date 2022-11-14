import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoTareaComponent } from './cuerpo-tarea.component';

describe('CuerpoTareaComponent', () => {
  let component: CuerpoTareaComponent;
  let fixture: ComponentFixture<CuerpoTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoTareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
