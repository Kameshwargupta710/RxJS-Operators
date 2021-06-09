import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestWithlatestComponent } from './combine-latest-withlatest.component';

describe('CombineLatestWithlatestComponent', () => {
  let component: CombineLatestWithlatestComponent;
  let fixture: ComponentFixture<CombineLatestWithlatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombineLatestWithlatestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineLatestWithlatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
