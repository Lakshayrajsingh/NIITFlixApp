import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MovieFields } from '../MovieFields';
import { MovieList } from '../MovieList';
import { MovieServicesService } from '../services/movie-services.service';

@Component({
  selector: 'app-favouritemovie',
  templateUrl: './favouritemovie.component.html',
  styleUrls: ['./favouritemovie.component.css']
})
export class FavouritemovieComponent {
  constructor(private movieService:MovieServicesService,private router:Router,private snackbar:MatSnackBar) { }

  favouriteMovieList:any ;
  emailId:any;
  movieLists: any = MovieList;
movieFields!: MovieFields;
IMG_URL = "https://image.tmdb.org/t/p/w200";
backdrop = "https://image.tmdb.org/t/p/w500"

favUrl = "http://localhost:8083/movie-display"

search!: string;

ngOnInit(): void {
  // this.emailId=localStorage.getItem("email");
  // console.log(this.emailId);
  
  // this.movieService.getFavMovie(this.emailId).subscribe((Response) =>{
  //   this.favouriteMovieList=Response;
  //   console.log(this.favouriteMovieList[0]);
  //   })

  this.getFavMovies();
  }
   
getFavMovies(){
  this.emailId=localStorage.getItem("email");
  console.log(this.emailId);
  
  this.movieService.getFavMovie(this.emailId).subscribe((Response) =>{
    this.favouriteMovieList=Response;
    console.log(this.favouriteMovieList[0]);
    })

}
deleteMovieFromFavouriteList(id:any){
  this.movieService.deleteFavouriteMovie(this.emailId,id).subscribe(res=>{
    console.log(res);
    location.reload() ;
    // this.snackbar.open({detail:"DELETED",summary:"Movie Deleted Sucessfully !!",duration:100000})
    this.snackbar.open('Movie Deleted Sucessfully !!', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  })
}


getTrending() {
  this.movieService.getTrendingMovies().subscribe(data => {
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
  this.movieService.getUpcomingMovies().subscribe(data => {
    this.movieLists = data;
    console.log(this.movieLists);
  });
}
getTopRated() {
  this.movieService.getTopRatedMovies().subscribe(data => {
    this.movieLists = data;
    console.log(this.movieLists);
  });
}

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
  this.router.navigate(["/userview"])
}

}


