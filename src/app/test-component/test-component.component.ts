import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {
counter: number =0;
@Input() step:number =1;
  constructor() { }

  ngOnInit(): void {
  }
 decrease(){
  if(this.counter  > 0){
    this.counter= this.counter-this.step;
  }
  else{
    alert("error")
  }
 }
 increase(){
  if(this.counter <100){
  this.counter= this.counter+this.step;
  }
  else{
    alert("false")
  }
 }
}
