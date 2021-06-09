import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-pass',
  templateUrl: './set-pass.component.html',
  styleUrls: ['./set-pass.component.css']
})
export class SetPassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  alertMe(){
    alert("You're submitting this form as a new user!");
  }

}
