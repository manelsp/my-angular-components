import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponentsInputNumber } from './input-number';

describe('InputNumber', () => {
  let component: MyComponentsInputNumber;
  let fixture: ComponentFixture<MyComponentsInputNumber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponentsInputNumber]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponentsInputNumber);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
