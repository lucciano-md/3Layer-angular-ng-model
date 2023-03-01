import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-layer3',
  templateUrl: './layer3.component.html',
  styleUrls: ['./layer3.component.sass']
})
export class Layer3Component {
  @Input()
  title?: string;

  @Output()
  titleChange = new EventEmitter<string>();

  updateTitle(value: string)
  {
    this.title = value;
    this.titleChange.emit(value);
  }
}
