import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementStylesComponent } from './element-styles.component';

describe('ElementStylesComponent', () => {
  let component: ElementStylesComponent;
  let fixture: ComponentFixture<ElementStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementStylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
