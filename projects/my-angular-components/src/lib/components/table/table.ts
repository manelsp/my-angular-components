import { Component, input, output } from '@angular/core';

@Component({
  selector: 'my-components-table',
  imports: [],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class MyComponentsTable {
  columns = input<{ key: string; label: string }[]>([]);
  data = input<any[]>([]);

  rowClick = output<any>();

  public onRowClick(row: any) {
    this.rowClick.emit(row);
  }
}
