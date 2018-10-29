import { Component, OnInit } from '@angular/core';
import { Genre } from '../shared/models/genre';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genres: Genre[];

  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.genreService.getAllGenres().subscribe(
      genres => {
        this.genres = genres;
        console.log(this.genres);
      }
    )
  }
}
