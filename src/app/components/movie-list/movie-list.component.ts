import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: any[];

  constructor() { }

  ngOnInit() {
    this.movies = [

      {
        "Title": "Mystery Of Destiny",
        "Year": "2011",
        "Poster": "https://i0.wp.com/www.ghanacelebrities.com/wp-content/uploads/2011/03/Mystery-of-Destiny.jpg?w=460&ssl=1"
      },
      {
        "Title": "Believe Me",
        "Year": "2019",
        "Poster": "http://www.ghanacelebrities.com/wp-content/uploads/2010/12/Believe-Me.jpg"
      },
      {
        "Title": "Guardians of the Galaxy Vol. 2",
        "Year": "2017",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
      },
      // {
      //   "Title": "Iron Man 1",
      //   "Year": "2008",
      //   "Poster": "https://i.ebayimg.com/images/g/by4AAOSwF8BcpvE8/s-l1600.jpg"
      // }

    ]

  }

}
