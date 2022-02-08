import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';

  items = ['nicolas', 'ramiro', 'roberto', 'juancarlos'];

  power = 10;
  
  ngOnInit(): void {
      
  }

  addItem(){
    this.items.push('Nuevo Item');
  }

  deleteItem(index: number){
    this.items.splice(index, 1)
  }
}
