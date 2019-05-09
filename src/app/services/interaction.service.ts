import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MockdataService } from './mockdata.service';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  //varför teacherMessage$$$$$$$$$$$$$$ ?????????
  // private teacherMessageSource = new Subject<number>();
  // teacherMessage$ = this.teacherMessageSource.asObservable();

  // constructor() { }


  // sendMessage(message: number){
  //   this.teacherMessageSource.next(message);

  // }

  private teacherMessageSource = new Subject<number>();
  teacherMessage$ = this.teacherMessageSource.asObservable();

  constructor() { }


  sendMessage(message: number){
    this.teacherMessageSource.next(message);
  }

  addService(){
      
  }
}
