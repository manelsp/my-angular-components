import { MyComponentsTable } from './../../../../../my-angular-components/src/lib/components/table/table';
import { MyComponentsMessage } from './../../../../../my-angular-components/src/lib/components/message/message';
import { MyComponentsAvatar } from './../../../../../my-angular-components/src/lib/components/avatar/avatar';
import { MyComponentsCounterBadge } from './../../../../../my-angular-components/src/lib/components/counter-badge/counter-badge';
import { MyComponentsFooter } from './../../../../../my-angular-components/src/lib/components/footer/footer';
import { Component } from '@angular/core';
import { MyComponentsButton } from './../../../../../my-angular-components/src/lib/components/button/button';
import { MyComponentsChip } from './../../../../../my-angular-components/src/lib/components/chip/chip';
import { MyComponentsCard } from './../../../../../my-angular-components/src/lib/components/card/card';
import { Forms } from "../../components/forms/forms";


@Component({
  selector: 'app-components',
  imports: [
    MyComponentsCard,
    MyComponentsChip,
    MyComponentsButton,
    MyComponentsFooter,
    MyComponentsCounterBadge,
    MyComponentsAvatar,
    MyComponentsMessage,
    MyComponentsTable,
    Forms
],
  templateUrl: './components.html',
  styleUrl: './components.scss'
})
export class Components {
  columns = [
    { label: 'Nombre', key: 'name' },
    { label: 'Correo', key: 'email' },
    { label: 'País', key: 'country' }
  ];

  data = [
    { name: 'Juan Pérez', email: 'juan@example.com', country: 'España' },
    { name: 'Lucía Gómez', email: 'lucia@example.com', country: 'México' },
    { name: 'Mario Rossi', email: 'mario@example.com', country: 'Italia' }
  ];

  onRowSelected(row: any) {
    console.log('Fila clickeada:', row);
    // Aquí puedes navegar, abrir modal, etc.
  }
}
