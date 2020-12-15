import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailDefaultComponent } from './recipe-detail-default.component';

describe('RecipeDetailDefaultComponent', () => {
  let component: RecipeDetailDefaultComponent;
  let fixture: ComponentFixture<RecipeDetailDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDetailDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
