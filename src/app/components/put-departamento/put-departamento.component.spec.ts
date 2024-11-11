import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutDepartamentoComponent } from './put-departamento.component';

describe('PutDepartamentoComponent', () => {
  let component: PutDepartamentoComponent;
  let fixture: ComponentFixture<PutDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PutDepartamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
