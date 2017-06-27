import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtNavComponent } from './nav.component';

describe('ArtNavComponent', () => {
  let component: ArtNavComponent;
  let fixture: ComponentFixture<ArtNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
