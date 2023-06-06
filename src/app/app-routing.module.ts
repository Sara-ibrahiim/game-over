
import { AllComponent } from './all/all.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { AuthGuard } from './auth.guard';

import { GamesComponent } from './games/games.component';

const routes: Routes = [
  {path: '',redirectTo: 'login',pathMatch:"full"},
  {path: 'home', canActivate: [AuthGuard], component: HomeComponent, title: 'home'},
  {path: 'all',  canActivate: [AuthGuard],component: AllComponent, title: 'all'},
  {path: 'games/:gamesBy',  canActivate: [AuthGuard], component:GamesComponent},
  {path: 'games/:gamesBy/:selected',  canActivate: [AuthGuard], component:GamesComponent},
  {path: 'gameDetails/:id',  canActivate: [AuthGuard],  component:GameDetailsComponent, title: 'gameDetails'},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  

  
  


  
  {path: '**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
