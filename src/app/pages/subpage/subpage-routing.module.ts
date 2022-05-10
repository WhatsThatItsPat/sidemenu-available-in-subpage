import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubpagePage } from './subpage.page';

const routes: Routes = [
  {
    path: '',
    component: SubpagePage
  },
  {
    path: 'subpage',
    loadChildren: () => import('./subpage.module').then( m => m.SubpagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubpagePageRoutingModule {}
