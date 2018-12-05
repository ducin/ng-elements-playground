import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'my-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class MyHelloComponent {

  @Input()
  userName: string = 'Włodek';

  @Input()
  age: number;

}
