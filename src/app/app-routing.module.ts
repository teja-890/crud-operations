import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { CreateComponent } from './components/create/create.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateComponent } from './components/update/update.component';


const routes: Routes = [
 {path:"register",component:CreateComponent},
 {path:"login",component:LoginComponent},
 {path:"emplist",component:EmpListComponent},
 {path:"update",component:UpdateComponent},
 {path:"cards",component:CardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
