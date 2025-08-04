import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentsButton } from './button';

describe('Button', () => {
  let component: MyComponentsButton;
  let fixture: ComponentFixture<MyComponentsButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponentsButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponentsButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
