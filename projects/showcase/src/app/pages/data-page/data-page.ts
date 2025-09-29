import { MyComponentsTable } from './../../../../../my-angular-components/src/lib/components/table/table';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-page',
  imports: [
    MyComponentsTable    
  ],
  templateUrl: './data-page.html',
  styleUrl: './data-page.scss'
})
export class DataPage {
public columns = [
    { label: 'Nombre', key: 'name' },
    { label: 'Correo', key: 'email' },
    { label: 'País', key: 'country' }
  ];

  public data = [
    { name: 'Juan Pérez', email: 'juan@example.com', country: 'España' },
    { name: 'Lucía Gómez', email: 'lucia@example.com', country: 'México' },
    { name: 'Mario Rossi', email: 'mario@example.com', country: 'Italia' }
  ];

    public onRowSelected(row: any) {
    console.log('Fila clickeada:', row);
  }
}
