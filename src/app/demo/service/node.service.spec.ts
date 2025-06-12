import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NodeService } from './node.service';

describe('NodeService', () => {
  let service: NodeService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NodeService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should fetch files data', fakeAsync(() => {
    let result: any[] | undefined;
    service.getFiles().then(r => result = r);

    const req = http.expectOne('assets/demo/data/files.json');
    req.flush({ data: [{ label: 'root' }] });
    tick();

    expect(result?.length).toBe(1);
    expect(result?.[0].label).toBe('root');
  }));
});
