import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PostCreateComponent } from './admin/dashboard/posts/post-create/post-create.component';
import { DefaultComponent } from './admin/default/default.component';

const routes: Routes = [
{path:'', component: DefaultComponent,
  children : [
    {path: 'dashboard', component: DashboardComponent}, 
    {path: 'posts', component: PostCreateComponent}
  ]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
