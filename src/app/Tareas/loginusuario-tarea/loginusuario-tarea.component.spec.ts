import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginusuarioTareaComponent } from './loginusuario-tarea.component';

describe('LoginusuarioTareaComponent', () => {
  let component: LoginusuarioTareaComponent;
  let fixture: ComponentFixture<LoginusuarioTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginusuarioTareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginusuarioTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
