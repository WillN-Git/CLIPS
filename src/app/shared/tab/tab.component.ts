import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
})
export class TabComponent implements OnInit {
  @Input() tabTitle: string = '';
  @Input() active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
