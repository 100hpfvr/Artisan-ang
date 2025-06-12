import { TestBed } from '@angular/core/testing';
import { MenuService } from './app.menu.service';

describe('MenuService', () => {
  let service: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuService);
  });

  it('should emit menu state changes', (done) => {
    service.menuSource$.subscribe(event => {
      expect(event).toEqual({key: 'test'});
      done();
    });
    service.onMenuStateChange({key: 'test'} as any);
  });

  it('should emit reset events', (done) => {
    service.resetSource$.subscribe(() => done());
    service.reset();
  });
});
