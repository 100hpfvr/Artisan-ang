import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PrimeNGConfig } from 'primeng/api';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let primengConfig: PrimeNGConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [PrimeNGConfig]
    });

    primengConfig = TestBed.inject(PrimeNGConfig);
  });

  it('should create the app and enable ripple', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
    expect(primengConfig.ripple).toBeTrue();
  });
});
