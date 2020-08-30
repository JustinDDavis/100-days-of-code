import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product; // Values to come in. 
  @Output() notify = new EventEmitter(); //Event publisher back up
  
  constructor() { }

  ngOnInit(): void {
  }
}
