import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  
  
  public images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  
  constructor(config: NgbCarouselConfig, 
              private movieService: MovieService) {

    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    
    movieService.getAllPopularMovies().subscribe(movies => {
      console.log(movies.map(movie => movie.backdropUrl));
      console.log(movies.map(movie => movie.posterUrl));
    })

    movieService.getAllPopularMovies().subscribe(movies => {
      this.images = movies.map(movie => movie.backdropUrl);
    })
  }

  ngOnInit() {
  }

}
