import { Component, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../Model/movie';
import { MovieServicesService } from '../services/movie-services.service';
import { MovieList } from '../MovieList';
import { MovieFields } from '../MovieFields';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularMovies!: Movie



  constructor(private movieService: MovieServicesService, private trendingService:MovieServicesService) {
    
  }
  listOfPlaylistName: any;
  playlistName: any;

  bannerResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  movieLists:any= MovieList;
  movieFields!: MovieFields;
  IMG_URL = "https://image.tmdb.org/t/p/w200";
  backdrop = "https://image.tmdb.org/t/p/w500"
   search!:string;
  ngOnInit(): void {
    this.bannerData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }

   // bannerdata
   bannerData() {
    this.movieService.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }
  actionMovieResult: any = [];
  
  // action 
  actionMovie() {
    this.movieService.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    });
  }
  adventureMovieResult: any = [];
  // adventure 
  adventureMovie() {
    this.movieService.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }
  // animation 
  animationMovie() {
    this.movieService.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    });
  }


  // comedy 
  comedyMovie() {
    this.movieService.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }

  // documentary 
  documentaryMovie() {
    this.movieService.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
    });
  }


  // science-fiction 
  sciencefictionMovie() {
    this.movieService.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
    });
  }

  // thriller
  thrillerMovie() {
    this.movieService.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }
}







