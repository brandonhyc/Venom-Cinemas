import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];
  genreId: Number;

  constructor(
    private movieService: MovieService,
    private genreService: GenreService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      params => {
        this.genreId = +params.get("id");
        if (this.genreId < 0) {
          //error
          this.movieService.getAllMovies().subscribe(
            movies => this.movies = movies
          )
        }
        
        this.genreService.getMovieByGenre(this.genreId).subscribe(
          movies => this.movies = movies
        )
      }
    )
    // this.genreService.getMovieByGenre(id)
    // .subscribe(
    //   movies => {
    //     this.movies = movies;
    //     console.log(this.movies);
    //   }
    // )
      
      // this.movieService.getAllMovies()
      //   .subscribe(
      //     m => {
      //       this.movies = m;
      //       console.log(this.movies);
      //     }
      //   )

    // this.movieService.getMovieById("13")
    //     .subscribe(
    //       m => {
    //         this.movies = [m];
    //         console.log(this.movies);
    //       }
    //     )

  }
}
