import { TestBed } from '@angular/core/testing';
import { LayoutService } from './app.layout.service';

describe('LayoutService', () => {
  let service: LayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutService);
  });

  it('should toggle overlay menu state', () => {
    service.config.menuMode = 'overlay';
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1200 });
    service.onMenuToggle();
    expect(service.state.overlayMenuActive).toBeTrue();
  });

  it('should show profile and config sidebars', () => {
    service.showProfileSidebar();
    service.showConfigSidebar();
    expect(service.state.profileSidebarVisible).toBeTrue();
    expect(service.state.configSidebarVisible).toBeTrue();
  });

  it('should emit config updates', (done) => {
    service.configUpdate$.subscribe(() => done());
    service.onConfigUpdate();
  });
});
