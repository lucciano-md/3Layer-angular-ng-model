import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-layer1',
  templateUrl: './layer1.component.html',
  styleUrls: ['./layer1.component.sass']
})
export class Layer1Component {

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
