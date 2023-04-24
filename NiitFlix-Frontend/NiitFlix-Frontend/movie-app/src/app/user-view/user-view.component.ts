import { Component } from '@angular/core';
import { MovieServicesService } from '../services/movie-services.service';
import { MovieFields } from '../MovieFields';
import { MovieList } from '../MovieList';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {

  constructor(private movieService: MovieServicesService, private trendingService: MovieServicesService, private router: Router, private snackbar: MatSnackBar) { }
  ngOnInit(): void {
    this.getTopRated();
  }
  movieLists: any = MovieList;
  movieFields!: MovieFields;
  IMG_URL = "https://image.tmdb.org/t/p/w200";
  backdrop = "https://image.tmdb.org/t/p/w500"

  favUrl = "http://localhost:8083/movie-display"

  search!: string;

  getTrending() {
    this.trendingService.getTrendingMovies().subscribe(data => {
      this.movieLists = data;
      console.log(this.movieLists);
    });
  }

  // getPopular() {
  //   this.trendingService.getPopularMovies().subscribe(data => {
  //     this.movieLists = data;
  //     console.log(this.movieLists);
  //   });
  // }


  getUpcoming() {
    this.trendingService.getUpcomingMovies().subscribe(data => {
      this.movieLists = data;
      console.log(this.movieLists);
    });
  }
  getTopRated() {
    this.trendingService.getTopRatedMovies().subscribe(data => {
      this.movieLists = data;
      console.log(this.movieLists);
    });
  }

  searchMovies() {
    this.trendingService.getData(this.search).subscribe(data => {
      this.movieLists = data;
      console.log(this.movieLists)
    }, (error) => {
      console.log(error);
    })
  }

  //trying favs
  movieData!: [];
  addToFavourites(a: any) {
    this.movieService.addFavMovie(a).subscribe({
      next: (result: any) => {
        console.log(result);
        this.snackbar.open('Movie Added Sucessfully !!', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
        this.movieData = result;

      }
    })
  }

  getVideosPlaying(idd: number) {
    this.movieService.idd = idd;
    this.router.navigate(["playMovie"]);
  }

  goToFav() {
    this.router.navigate(["/favview"])
  }
}
