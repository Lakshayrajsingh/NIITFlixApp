import { Component } from '@angular/core';
import { MovieServicesService } from '../services/movie-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  constructor(private service:MovieServicesService,private router:ActivatedRoute) { }
  
  // getMovieVideoResult:any;

  // getVideo(id:any)
  // {
  //   this.service.getMovieVideo(id).subscribe((result)=>{
  //       result.results.forEach((element:any) => {
  //           if(element.type=="Trailer")
  //           {
  //             this.getMovieVideoResult = element.key;
  //           }
  //       });

  //   });
  // }
}
