import { TestBed, async } from '@angular/core/testing';
import { SimpleGameOfLifeComponent } from './simple-game-of-life.component';

describe('SimpleGameOfLifeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleGameOfLifeComponent],
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(SimpleGameOfLifeComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
