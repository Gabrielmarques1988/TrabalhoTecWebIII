import { Routes } from '@angular/router';
import { FormsComponent } from './componente/forms/forms.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo: 'form',
    pathMatch: 'full'
  },
  {
    path: 'form',
    component: FormsComponent
  }
];
