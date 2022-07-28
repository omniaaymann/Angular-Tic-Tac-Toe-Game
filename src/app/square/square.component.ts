import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  template: ` <button>{{ value }}</button> `,
  styleUrls: ['./square.component.css'],
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
  constructor() {}

  ngOnInit(): void {}
}
