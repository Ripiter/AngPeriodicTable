import { Component, OnInit } from '@angular/core';
import { Element } from '../Element';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table-gen',
  templateUrl: './table-gen.component.html',
  styleUrls: ['./table-gen.component.css']
})
export class TableGenComponent implements OnInit {

  private _jsonURL = '../../assets/ElementsJson.json';

  elements : Element[] = [];


  constructor(private http: HttpClient) {
    this.getDataFromFile();
  }
  

  // Call this method in constructor
  getDataFromFile(){
    this.getJSON().subscribe(data => {      
      // let datas = JSON.parse(data);

      for(let d of data){
        let el = new Element();
        el.name = d.name;
        el.atomic_mass = d.atomic_mass;
        el.category = d.category;
        el.number = d.number;
        el.symbol = d.symbol;
        el.xpos = d.xpos;
        el.ypos = d.ypos;
        el.description = d.description;
        
        this.elements.push(el);
      }

    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  
  }

  ngOnInit(): void {

  }
  
  ShowList(){
    for(let element of this.elements){
      console.log(element.ToString());
    }
  }

}
