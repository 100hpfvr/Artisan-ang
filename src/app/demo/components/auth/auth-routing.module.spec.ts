import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ROUTES } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';

describe('AuthRoutingModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AuthRoutingModule]
    });
  });

  it('should include login route', () => {
    const routes = TestBed.inject(ROUTES).flat();
    const loginRoute = routes.find(r => r.path === 'login');
    expect(loginRoute).toBeTruthy();
  });
});
