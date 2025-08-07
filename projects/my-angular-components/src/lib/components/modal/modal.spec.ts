import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentsModal } from './modal';

describe('Modal', () => {
  let component: MyComponentsModal;
  let fixture: ComponentFixture<MyComponentsModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponentsModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponentsModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
