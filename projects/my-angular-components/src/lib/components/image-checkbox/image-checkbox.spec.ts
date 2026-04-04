import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentsImageCheckbox } from './image-checkbox';

describe('MyComponentsImageCheckbox', () => {
  let component: MyComponentsImageCheckbox;
  let fixture: ComponentFixture<MyComponentsImageCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponentsImageCheckbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponentsImageCheckbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
