import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  alphabetInItalian: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'Z'];
  lifeRemaining: number = 11;
  constructor() { }

  getItalianAlph() {
    return this.alphabetInItalian;
  }

  changeLife() {
    
      this.lifeRemaining--;
    
  }
}
