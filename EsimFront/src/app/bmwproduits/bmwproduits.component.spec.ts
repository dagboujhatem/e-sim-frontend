import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmwproduitsComponent } from './bmwproduits.component';

describe('BmwproduitsComponent', () => {
  let component: BmwproduitsComponent;
  let fixture: ComponentFixture<BmwproduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BmwproduitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmwproduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
