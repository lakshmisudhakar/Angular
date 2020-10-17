import { async, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService]
    });

    service = TestBed.inject(SearchService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it('should be created', () => {
    // tslint:disable-next-line:no-shadowed-variable
    const service: SearchService = TestBed.get(SearchService);
    expect(service).toBeTruthy();
   });



  it(`should create`, async(inject([HttpTestingController, SearchService],
    (httpClient: HttpTestingController, apiService: SearchService) => {
      expect(apiService).toBeTruthy();
  })));
});
