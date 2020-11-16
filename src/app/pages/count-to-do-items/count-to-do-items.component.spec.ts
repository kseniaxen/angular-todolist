import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountToDoItemsComponent } from './count-to-do-items.component';

describe('CountToDoItemsComponent', () => {
  let component: CountToDoItemsComponent;
  let fixture: ComponentFixture<CountToDoItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountToDoItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountToDoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
