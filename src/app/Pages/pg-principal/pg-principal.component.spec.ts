import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgPrincipalComponent } from './pg-principal.component';

describe('PgPrincipalComponent', () => {
  let component: PgPrincipalComponent;
  let fixture: ComponentFixture<PgPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
