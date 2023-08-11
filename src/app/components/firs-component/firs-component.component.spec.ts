import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsComponentComponent } from './firs-component.component';

describe('FirsComponentComponent', () => {
  let component: FirsComponentComponent;
  let fixture: ComponentFixture<FirsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirsComponentComponent]
    });
    fixture = TestBed.createComponent(FirsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
