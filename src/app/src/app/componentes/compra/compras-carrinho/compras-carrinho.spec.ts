import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComprasCarrinho } from './compras-carrinho';

describe('ComprasCarrinho', () => {
  let component: ComprasCarrinho;
  let fixture: ComponentFixture<ComprasCarrinho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComprasCarrinho],
    }).compileComponents();

    fixture = TestBed.createComponent(ComprasCarrinho);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
