import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterInfoComponent } from './converter-info.component';

describe('ConverterInfoComponent', () => {
  let component: ConverterInfoComponent;
  let fixture: ComponentFixture<ConverterInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConverterInfoComponent]
    });
    fixture = TestBed.createComponent(ConverterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
