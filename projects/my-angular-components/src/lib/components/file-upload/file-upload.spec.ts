import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentsFileUpload } from './file-upload';

describe('FileUpload', () => {
  let component: MyComponentsFileUpload;
  let fixture: ComponentFixture<MyComponentsFileUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponentsFileUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponentsFileUpload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
