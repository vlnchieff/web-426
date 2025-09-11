import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="wrapper">
      <header class="banner">
        <h1>RPG Builder Navigation</h1>
      </header>

      <nav class="navbar">
        <ul>
          <li><a routerLink="/signin">Sign In</a></li>
          <li><a routerLink="/players">Players</a></li>
          <li><a routerLink="/create-character">Create Character</a></li>
          <li><a routerLink="/create-guild">Create Guild</a></li>
          <li><a routerLink="/character-faction">Character Faction</a></li>
        </ul>
      </nav>

      <main class="main-content">
        <router-outlet></router-outlet>
      </main>

      <footer class="footer">
        <p>&copy; 2025 RPG Builder</p>
      </footer>
    </div>
  `,
  styles: [`
    .wrapper {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      font-family: 'Segoe UI', sans-serif;
    }
    .banner {
      background-color: #222;
      color: #fff;
      padding: 1rem;
      text-align: center;
    }
    .navbar {
      background-color: #f4f4f4;
      padding: 1rem;
      text-align: center;
    }
    .navbar ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
    .navbar a {
      text-decoration: none;
      color: #333;
      font-weight: bold;
    }
    .navbar a:hover {
      text-decoration: underline;
    }
    .main-content {
      flex: 1;
      padding: 2rem;
    }
    .footer {
      background-color: #222;
      color: #fff;
      text-align: center;
      padding: 1rem;
    }
  `]
})
export class AppComponent {
  title = 'rpg-character-builder';
}
