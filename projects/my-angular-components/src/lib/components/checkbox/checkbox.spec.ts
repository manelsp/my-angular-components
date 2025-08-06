import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentsCheckbox } from './checkbox';

describe('Checkbox', () => {
  let component: MyComponentsCheckbox;
  let fixture: ComponentFixture<MyComponentsCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponentsCheckbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponentsCheckbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
