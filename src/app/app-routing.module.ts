import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' }, // Redirect root path to '/home'
  { path: 'categories', component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
