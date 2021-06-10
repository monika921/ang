import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css'],
  animations: [
    trigger('smoothCollapse', [
      state('initial', style({
        height: '0',
        overflow: 'hidden',
        opacity: '0',
        visibility: 'hidden'
      })),
      state('final', style({
        overflow: 'hidden'
      })),
      transition('initial<=>final', animate('250ms'))
    ])
  ]
})
export class AccordionItemComponent implements OnInit {

  @Input() title: string | undefined;
  showBody = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.showBody = !this.showBody;
  }

}
