import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Genre } from '../shared/models/genre';
import { Movie } from '../shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private apiService: ApiService) { }
  
  getAllGenres() : Observable<Genre[]>{
    return this.apiService.getAll("genres");
  }

  getMovieByGenre(id: Number): Observable<Movie[]> {
    return this.apiService.getSome("movies/genre/", id);
  }

}
