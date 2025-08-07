import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentsSidenav } from './sidenav';

describe('Sidenav', () => {
  let component: MyComponentsSidenav;
  let fixture: ComponentFixture<MyComponentsSidenav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponentsSidenav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponentsSidenav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
