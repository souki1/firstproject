import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedfirstComponent } from './nestedfirst.component';

describe('NestedfirstComponent', () => {
  let component: NestedfirstComponent;
  let fixture: ComponentFixture<NestedfirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedfirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
