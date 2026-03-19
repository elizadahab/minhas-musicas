import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandaDetalheComponent } from './banda-detalhe.component';

describe('BandaDetalheComponent', () => {
  let component: BandaDetalheComponent;
  let fixture: ComponentFixture<BandaDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BandaDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
