import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/movie-list.component';
import { GenreComponent } from './genre/genre.component';
import { MovieSearchComponent } from './movies/movie-search.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movies/movie.component';
import { FooterComponent } from './shared/layout/footer.component';
import { HeaderComponent } from './shared/layout/header.component';
import { AboutUsComponent } from './shared/components/about-us.component';

import { MovieFormComponent } from './movies/movie-form.component';
import { MyMoviesComponent } from './movies/my-movies.component';
import { CreateAccountComponent } from './account/create-account.component';
import { CreateMovieComponent } from './admin/create-movie.component';
import { ContactUsComponent } from './shared/components/contact-us.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './shared/components/not-found.component';
import { CarouselComponent } from './shared/components/carousel.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    GenreComponent,
    MovieListComponent,
    MovieSearchComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MovieFormComponent,
    MyMoviesComponent,
    CreateAccountComponent,
    CreateMovieComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    MovieComponent,
    NotFoundComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'movies', component: MovieListComponent},
      { path: 'movie/:id', component: MovieComponent},
      { path: 'genre/:id', component: MovieListComponent},
      { path: 'aboutUs', component: AboutUsComponent },
      { path: 'account/create', component: CreateAccountComponent },
      { path: 'contactUs', component: ContactUsComponent },
      { path: 'admin/movie/new', component: CreateMovieComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', component: NotFoundComponent },

    ]),
    JwtModule.forRoot({
      config: {
      tokenGetter: tokenGetter,
      whitelistedDomains: ['localhost']
      }

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
