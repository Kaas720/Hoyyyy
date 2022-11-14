import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudProductoCuerpoComponent } from './crud-producto-cuerpo.component';

describe('CrudProductoCuerpoComponent', () => {
  let component: CrudProductoCuerpoComponent;
  let fixture: ComponentFixture<CrudProductoCuerpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudProductoCuerpoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudProductoCuerpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
