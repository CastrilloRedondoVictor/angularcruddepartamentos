import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDepartamentoComponent } from './post-departamento.component';

describe('PostDepartamentoComponent', () => {
  let component: PostDepartamentoComponent;
  let fixture: ComponentFixture<PostDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostDepartamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
