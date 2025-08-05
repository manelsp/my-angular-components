import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentsCounterBadge } from './counter-badge';

describe('CounterBadge', () => {
  let component: MyComponentsCounterBadge;
  let fixture: ComponentFixture<MyComponentsCounterBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponentsCounterBadge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponentsCounterBadge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
