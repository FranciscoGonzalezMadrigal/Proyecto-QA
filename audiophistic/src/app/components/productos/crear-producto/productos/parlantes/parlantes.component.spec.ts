import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParlantesFormComponent } from './parlantes.component';

describe('ParlantesFormComponent', () => {
  let component: ParlantesFormComponent;
  let fixture: ComponentFixture<ParlantesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParlantesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParlantesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
