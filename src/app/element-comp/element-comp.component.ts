import { Component, OnInit, Input } from '@angular/core';
import { Element } from "../Element";
@Component({
  selector: 'app-element-comp',
  templateUrl: './element-comp.component.html',
  styleUrls: ['./element-comp.component.css']
})
export class ElementCompComponent implements OnInit {
@Input("Element")
element = Element.prototype;
  
constructor() { }

  ngOnInit(): void {
    
  }
    
}


