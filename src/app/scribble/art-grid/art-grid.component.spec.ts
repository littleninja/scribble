import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtGridComponent } from './art-grid.component';

describe('ArtGridComponent', () => {
  let component: ArtGridComponent;
  let fixture: ComponentFixture<ArtGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
