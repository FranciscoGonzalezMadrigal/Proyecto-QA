import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudifonosFormComponent } from './audifonos.component';

describe('AudifonosFormComponent', () => {
  let component: AudifonosFormComponent;
  let fixture: ComponentFixture<AudifonosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudifonosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudifonosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
