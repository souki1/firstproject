import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataapiComponent } from './dataapi.component';

describe('DataapiComponent', () => {
  let component: DataapiComponent;
  let fixture: ComponentFixture<DataapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
