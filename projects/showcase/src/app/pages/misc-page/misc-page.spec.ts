import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscPage } from './misc-page';

describe('MiscPage', () => {
  let component: MiscPage;
  let fixture: ComponentFixture<MiscPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiscPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiscPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
