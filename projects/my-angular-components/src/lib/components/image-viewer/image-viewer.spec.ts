import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentsImageViewer } from './image-viewer';

describe('ImageViewer', () => {
  let component: MyComponentsImageViewer;
  let fixture: ComponentFixture<MyComponentsImageViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponentsImageViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponentsImageViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
