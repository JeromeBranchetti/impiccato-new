import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ItalianDictionaryService } from './italian-dictionary.service';
import { LetterComponent } from './letter/letter.component';
import { MessengerService } from './messenger.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessengerService, ItalianDictionaryService]
})
export class AppComponent implements OnInit, AfterViewInit {

  alphabet: string[] = [];
  wordToGuess: string[] = [];
  clicked: boolean = false;
  liferemaining!: number;
  shouldUncoverSlot: boolean[] = [];
  victory: number = 0;
  isLetterActive!: boolean;
  show: boolean = false;
  youWin: boolean = false;
  youLose: boolean = false;

  @ViewChildren('letter') listOfLetter!: QueryList<ElementRef>;
  
  constructor(private messenger: MessengerService , private dict: ItalianDictionaryService) {
  }

  ngOnInit(): void {
    this.alphabet = this.messenger.alphabetInItalian;
    this.liferemaining = this.messenger.lifeRemaining;
    
  }

  ngAfterViewInit(): void {
    console.log("This is the list of letters ViewChildren " + this.listOfLetter);
  }

  startGame() {
    this.wordToGuess = this.dict.getWord().map(char => {return char.toUpperCase()});
    for (let i = 0; i < this.wordToGuess.length; i++) {
      this.shouldUncoverSlot.push(false);
    }
    this.clicked = true;
    
   
  }

  resetGame() {
    this.wordToGuess = [];
    this.liferemaining = this.messenger.lifeRemaining;
    this.shouldUncoverSlot = [];
    this.clicked = false;
    

  }

  checkIfAmThere(letterFired: string) {
    if(this.wordToGuess.includes(letterFired)) {
      this.wordToGuess.forEach((element, index) => {
        if(element === letterFired) {
          this.shouldUncoverSlot[index] = true;
          this.victory++;
          
        }
      });
    }
    else {
      this.liferemaining--;
      
    }
    if (this.liferemaining === 0) {
      this.youLose = true;
      setTimeout(() => {
        this.resetGame();
        this.youLose = false;
      }, 2000);
    }
    if (this.victory === this.wordToGuess.length) {
      this.youWin = true;
      setTimeout(() => {
        this.resetGame();
        this.youWin = false;
      }, 2000);
    }

    console.log("Victory is " + this.victory);
  }

  showWord() {
    this.show = !this.show;
  }



}