import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-infect',
  templateUrl: './infect.component.html',
  styleUrls: ['./infect.component.css']
})
export class InfectComponent implements OnInit {
  @Input() hero: any;
  constructor() {}

  ngOnInit(): void {
    console.warn(this.hero);
  }

    AddClass()
{
  return{'btn-warning':true,'btn-italic':true,'btn-red':true}
}
}
