import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';

const routes: Routes = [
  { path: 'players', component: PlayersComponent }
];

describe('AppComponent Routing', () => {
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [AppComponent]
    }).compileComponents();

    router = TestBed.inject(Router);
  });

  it('should have correct route for PlayersComponent', () => {
    const route = router.config.find(r => r.path === 'players');
    expect(route).toBeDefined();
    expect(route?.component).toBe(PlayersComponent);
  });
});
