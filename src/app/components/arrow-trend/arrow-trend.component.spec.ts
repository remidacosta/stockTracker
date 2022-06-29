import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowTrendComponent } from './arrow-trend.component';

describe('ArrowTrendComponent', () => {
  let component: ArrowTrendComponent;
  let fixture: ComponentFixture<ArrowTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowTrendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
