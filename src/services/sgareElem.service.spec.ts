import {inject, TestBed} from '@angular/core/testing';
import {SharedDataService} from "./shareElemData.service";

describe('SharedDataService', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        SharedDataService
      ],
    });
  });
  it('sendMessage',
    inject([SharedDataService],
      (service: SharedDataService) => {
        expect(service).toBeTruthy();
        service.sendMessage('message');
    })
  );
  it('getClickEvent',
    inject([SharedDataService],
      (service: SharedDataService) => {
      expect(service.getClickEvent().subscribe(s => s)).toBeDefined()
      }
      ))
})
