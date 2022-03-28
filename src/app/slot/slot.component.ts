import { Component, Input, OnInit, Output } from '@angular/core';
import { MessengerService } from '../messenger.service';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css'],
})
export class SlotComponent implements OnInit {
  @Input() wordLetter: string = '';
  @Input() visible!: boolean;
  constructor(exchange: MessengerService) {}
  ngOnInit(): void {}
}
