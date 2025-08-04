import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponentsInput } from './input';

describe('Input', () => {
  let component: MyComponentsInput;
  let fixture: ComponentFixture<MyComponentsInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponentsInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponentsInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
