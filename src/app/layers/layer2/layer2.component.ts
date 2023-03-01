import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-layer2',
  templateUrl: './layer2.component.html',
  styleUrls: ['./layer2.component.sass']
})
export class Layer2Component {

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
