import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponentsCard } from './card';

describe('Card', () => {
  let component: MyComponentsCard;
  let fixture: ComponentFixture<MyComponentsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponentsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponentsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
