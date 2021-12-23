import {inject, TestBed} from '@angular/core/testing';
import {DeleteElemService} from "./deleteElem.service";

describe('DeleteElemService', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        DeleteElemService
      ],
    });
  });
  it('sendMessage',
    inject([DeleteElemService],
      (service: DeleteElemService) => {
        expect(service).toBeTruthy();
        service.sendMessage('message');

    })
  );
  it('getClickEvent',
    inject([DeleteElemService],
      (service: DeleteElemService) => {
      expect(service.getClickEvent().subscribe(s => s)).toBeDefined()
      }
      ))
})
