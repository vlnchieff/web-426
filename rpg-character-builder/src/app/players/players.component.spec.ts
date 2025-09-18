import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let fixture: ComponentFixture<PlayersComponent>;
  let component: PlayersComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersComponent] // standalone
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create PlayersComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly display a list of characters', () => {
    const characterCards = fixture.debugElement.queryAll(By.css('[data-testid="character-card"]'));
    expect(characterCards.length).toBe(10);
  });
});
