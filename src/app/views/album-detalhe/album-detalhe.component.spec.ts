import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDetalheComponent } from './album-detalhe.component';

describe('AlbumDetalheComponent', () => {
  let component: AlbumDetalheComponent;
  let fixture: ComponentFixture<AlbumDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
