import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  let service: CustomerService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CustomerService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should request small customers', fakeAsync(() => {
    let customers: any[] | undefined;
    service.getCustomersSmall().then(c => customers = c);

    const req = http.expectOne('assets/demo/data/customers-small.json');
    req.flush({ data: [{ name: 'Bob' }] });
    tick();

    expect(customers?.length).toBe(1);
    expect(customers?.[0].name).toBe('Bob');
  }));
});
