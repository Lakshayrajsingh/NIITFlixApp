import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchComponent } from './search/search.component';
import { UserViewComponent } from './user-view/user-view.component';
import { LogincheckerGuard } from './loginchecker.guard';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FavouritemovieComponent } from './favouritemovie/favouritemovie.component';
import { PlayMovieComponent } from './play-movie/play-movie.component';
import { FieldCheckerGuard } from './field-checker.guard';


const routes: Routes = [ 
  { path: "home", component: HomeComponent },
  {
    path:"", redirectTo:"home", pathMatch:"full"
  },
  { path: "signup", component: SignUpComponent,canDeactivate:[FieldCheckerGuard]},
  { path: "login", component: LoginComponent },
  {path:'search',component:SearchComponent},
  {path:'userview', component:UserViewComponent,canActivate:[LogincheckerGuard]},
  {path:'playMovie', component:PlayMovieComponent,canActivate:[LogincheckerGuard]},
  {path:'favview', component:FavouritemovieComponent,canActivate:[LogincheckerGuard]},
  {path:'movie/:id',component:MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
