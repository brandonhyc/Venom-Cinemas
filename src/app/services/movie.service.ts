import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Movie } from '../shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiService: ApiService) { }
  
  getAllMovies(): Observable<Movie[]> {
    return this.apiService.getAll("movies");
  } 
  getAllPopularMovies(): Observable<Movie[]> {
    return this.apiService.getAll("movies/popular");
  }
  getAllUpComingMovies(): Observable<Movie[]> {
    return this.apiService.getAll("movies/upcoming");
  }
  getMovieById(id: Number): Observable<Movie> {
    return this.apiService.getOne("movies/", id);
  }



}
