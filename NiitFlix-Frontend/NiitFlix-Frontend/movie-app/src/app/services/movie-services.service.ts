import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieList } from '../MovieList';

@Injectable({
  providedIn: 'root'
})
export class MovieServicesService {

videoData:any[]=[''];

idd:any;
  private backendURL = "http://localhost:8083/movieService";
  popular = "/popular";
  upcoming = "/upcoming";
  nowPlaying = "/now_playing";
  trending = "/trending";
  toprated = "/top_rated";

  url = "https://api.themoviedb.org/3/movie/popular?api_key=257122ddabd82407d89e196ee91735d2&page=";
  constructor(private httpClient: HttpClient) { }
  apikey="257122ddabd82407d89e196ee91735d2";
  getPopularMovies(): Observable<MovieList> {
    return this.httpClient.get<MovieList>(`${this.backendURL}${this.popular}`)
  }
  getUpcomingMovies(): Observable<MovieList> {
    return this.httpClient.get<MovieList>(`${this.backendURL}${this.upcoming}`)
  }
  getTopRatedMovies(): Observable<MovieList> {
    return this.httpClient.get<MovieList>(`${this.backendURL}${this.toprated}`)
  }
  getNowPlayingMovies(): Observable<MovieList> {
    return this.httpClient.get<MovieList>(`${this.backendURL}${this.nowPlaying}`)
  }
  getTrendingMovies(): Observable<MovieList> {
    return this.httpClient.get<MovieList>(`${this.backendURL}${this.trending}`)
  }
  getPagination(page: number): Observable<MovieList> {
    return this.httpClient.get<MovieList>(`${this.url}${page}`)
  }
// private  burl:String="http://localhost:8083/movieService/search" 
  baseurl= "https://api.themoviedb.org/3";
  getData(search: string): Observable<MovieList> {
    return this.httpClient.get<MovieList>(`${this.baseurl}/${search}`);
  }


   // searchmovive
   getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');

    return this.httpClient.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }
  
  bannerApiData(): Observable<any> {
    return this.httpClient.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }
  getMovieDetails(data: any): Observable<any> {
    return this.httpClient.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }

   // action 
   fetchActionMovies(): Observable<any> {
    return this.httpClient.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  // adventure
  fetchAdventureMovies(): Observable<any> {
    return this.httpClient.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }

  // animation
  fetchAnimationMovies(): Observable<any> {
    return this.httpClient.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  }

  // comedy
  fetchComedyMovies(): Observable<any> {
    return this.httpClient.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }
  // documentary
  fetchDocumentaryMovies(): Observable<any> {
    return this.httpClient.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
  }
  fetchScienceFictionMovies(): Observable<any> {
    return this.httpClient.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
  }

  // thriller
  fetchThrillerMovies(): Observable<any> {
    return this.httpClient.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
  }
     // getMovieVideo
     getMovieVideo(data: any): Observable<any> {
      return this.httpClient.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
    }



  favUrl="http://localhost:8083/movie-display"

  addFavMovie(movieInfo:any){
    let httpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('jwt'),
    });
    let requestOptions = { headers: httpHeaders };
    return this.httpClient.post(this.favUrl+'/add-favourite-movie',movieInfo,requestOptions)
  }
  getFavMovie(emailId:any) {
    let httpHeaders = new HttpHeaders({
   Authorization: 'Bearer ' + localStorage.getItem('jwt'),
 });
 let requestOptions = { headers: httpHeaders };
 return this.httpClient.get(this.favUrl+'/fav-movies/'+emailId,requestOptions);

 }

 videourl: string = '';
  getVideos(id: number):Observable<any> {
    this.videourl =
      'https://api.themoviedb.org/3/movie/' +
      id +
      '/videos?api_key=257122ddabd82407d89e196ee91735d2&language=en-US';
    return this.httpClient.get<any>(this.videourl);

  }
  // delete fav movie
  deleteFavouriteMovie(email:any,id:any){
    return this.httpClient.delete(this.favUrl+'/delete/'+email+'/'+id);
  }









}