import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-components-table',
  imports: [],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class MyComponentsTable {
  @Input() columns: { key: string; label: string }[] = [];
  @Input() data: any[] = [];

  @Output() rowClick = new EventEmitter<any>();

  public onRowClick(row: any) {
    this.rowClick.emit(row);
  }
}
