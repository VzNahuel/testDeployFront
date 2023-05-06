import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPersonaComponent } from './comp-persona.component';

describe('CompPersonaComponent', () => {
  let component: CompPersonaComponent;
  let fixture: ComponentFixture<CompPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
