import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'contacto'
  },
  {
    path: '',
    component: TabsPage,
    children:[{
      path: 'cuenta',
    loadChildren: () => import('../avatar/avatar.module').then( m => m.AvatarPageModule)
    },
    {
      path: 'contacto',
      loadChildren: () => import('../list/list.module').then( m => m.ListPageModule)
    },
    {
      path: 'config',
      loadChildren: () => import('../list-reorder/list-reorder.module').then( m => m.ListReorderPageModule)
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
