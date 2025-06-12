import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ROUTES } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

describe('AppRoutingModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppRoutingModule]
    });
  });

  it('should contain auth route', () => {
    const routes = TestBed.inject(ROUTES).flat();
    const authRoute = routes.find(r => r.path === 'auth');
    expect(authRoute).toBeTruthy();
  });
});
