import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookingvideoDetailsComponent } from './components/cookingvideo-details/cookingvideo-details.component';
import { CookingvideosListComponent } from './components/cookingvideos-list/cookingvideos-list.component';
import { AddCookingvideoComponent } from './components/add-cookingvideo/add-cookingvideo.component'

const routes: Routes = [
  { path: '', redirectTo: 'cookingvideos', pathMatch: 'full' },
  { path: 'cookingvideos', component: CookingvideosListComponent },
  { path: 'cookingvideos/:id', component: CookingvideoDetailsComponent },
  { path: 'add', component: AddCookingvideoComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


  


}
