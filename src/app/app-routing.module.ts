import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutUsComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
