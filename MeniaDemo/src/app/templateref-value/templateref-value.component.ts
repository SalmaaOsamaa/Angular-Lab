import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateref-value',
  templateUrl: './templateref-value.component.html',
  styleUrls: ['./templateref-value.component.scss']
})
export class TemplaterefValueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logData(data:any){
    console.log(data);
    
  }
}
