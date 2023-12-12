import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UppercaseDirective } from './uppercase.directive';

const routes: Routes = [
  { path: '', redirectTo: 'paineis', pathMatch: 'full' },
  {
    path: 'paineis',
    loadChildren: () => import('./pages/painel/painel.module').then (p => p.PainelModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
  ]
})
export class AppRoutingModule { }
