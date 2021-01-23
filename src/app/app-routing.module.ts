import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreditComponent } from './component/credit/credit.component';


const routes: Routes = [
  {
    path: 'app',
    component: AppComponent,
  },
  {
    path:'payment',
    component: CreditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
