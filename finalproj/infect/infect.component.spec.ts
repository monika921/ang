import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfectComponent } from './infect.component';

describe('InfectComponent', () => {
  let component: InfectComponent;
  let fixture: ComponentFixture<InfectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
