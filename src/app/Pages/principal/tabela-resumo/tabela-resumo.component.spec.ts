import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaResumoComponent } from './tabela-resumo.component';

describe('TabelaResumoComponent', () => {
  let component: TabelaResumoComponent;
  let fixture: ComponentFixture<TabelaResumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaResumoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
