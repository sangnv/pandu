import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModalContainerComponent } from './app-modal-container.component';

describe('AppModalContainerComponent', () => {
  let component: AppModalContainerComponent;
  let fixture: ComponentFixture<AppModalContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppModalContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppModalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
