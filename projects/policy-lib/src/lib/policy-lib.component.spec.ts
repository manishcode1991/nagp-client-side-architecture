import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyLibComponent } from './policy-lib.component';

describe('PolicyLibComponent', () => {
  let component: PolicyLibComponent;
  let fixture: ComponentFixture<PolicyLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolicyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
