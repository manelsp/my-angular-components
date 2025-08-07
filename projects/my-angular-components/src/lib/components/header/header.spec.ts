import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentsHeader } from './header';

describe('Header', () => {
  let component: MyComponentsHeader;
  let fixture: ComponentFixture<MyComponentsHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponentsHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponentsHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
