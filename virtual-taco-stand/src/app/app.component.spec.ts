import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

describe('AppComponent (Standalone)', () => {
  beforeEach(async () => {
    const activatedRouteStub = {
      snapshot: {
        paramMap: {
          get: () => 'staticValue',
        },
      },
      queryParams: of({}),
    };

    const routes: Routes = [
      { path: 'menu', component: MenuComponent }
    ];

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        MenuComponent // Only if it's standalone
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have correct route for Menu Component', () => {
    const router = TestBed.inject(Router);
    const route = router.config.find(r => r.path === 'menu');
    expect(route).toBeDefined();
    if (route) {
      expect(route.component).toBe(MenuComponent);
    }
  });
});
