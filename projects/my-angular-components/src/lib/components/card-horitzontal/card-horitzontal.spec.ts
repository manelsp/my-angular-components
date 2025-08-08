import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHoritzontal } from './card-horitzontal';

describe('CardHoritzontal', () => {
  let component: CardHoritzontal;
  let fixture: ComponentFixture<CardHoritzontal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHoritzontal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHoritzontal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
