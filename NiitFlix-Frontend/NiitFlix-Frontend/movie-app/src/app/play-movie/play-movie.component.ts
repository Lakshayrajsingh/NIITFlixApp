import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieServicesService } from '../services/movie-services.service';

@Component({
  selector: 'app-play-movie',
  templateUrl: './play-movie.component.html',
  styleUrls: ['./play-movie.component.css']
})
export class PlayMovieComponent {


  public safeUrl: any;
  videoIds!: any[];
  // current video index
  currentVideo: number=0;
play: boolean = false;
  // constructor() {
  //   this.version = NGYTPackage['dependencies']['ngx-youtube-player'].replace(
  //     '^',
  //     ''
  //   );
  // }
  constructor(

     private movieservice: MovieServicesService, private sanitizer: DomSanitizer)
     {}

     ngOnInit(): void {
      this.getVideoPlaying();
    // this.getVideoPlaying();
    // this.getUserDetails();
    // this.toPlayMovie();
  }







id:any;

   getVideoPlaying() {
      this.id = this.movieservice.idd;
      console.log(this.id);
      this.movieservice.getVideos(this.id).subscribe({
        next: (res) => {
          const key = res.results[0].key;
          console.log(key);
          this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            `https://www.youtube.com/embed/${key}`
          );
        },
      });
    }
  }