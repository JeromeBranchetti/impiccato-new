import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MessengerService } from '../messenger.service';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css'],
})
export class LetterComponent implements OnInit, OnChanges {
  @Input() value!: string;
  @Output() clickFired: EventEmitter<string> = new EventEmitter();

  constructor(exchange: MessengerService) {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}

  iWasClicked() {
    this.clickFired.emit(this.value);
    console.log('I was clicked : ' + this.value);
  }
}
