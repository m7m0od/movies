import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  term!: string;
  currentPage = 1;
  password:string = "SAas";
  pageNumbers:number[]=[];
  trendingAll = [];
  constructor(private _MovieService:MovieService) { 
    for(let i =1 ; i <11 ; i++)
    {
      this.pageNumbers.push(i);
    }

      _MovieService.getTrendingTv(this.currentPage).subscribe( (data) => {
        this.trendingAll= data.results
      } )
  }
  changeNumber(ind: number)
   {
     this.currentPage  = ind;
    this._MovieService.getTrendingTv(this.currentPage ).subscribe( (data) => {
      this.trendingAll= data.results
    } )
   }
   prev()
   {
      this.changeNumber(this.currentPage -1)
   }
   next()
   {
      this.changeNumber(this.currentPage +1)
   }

  ngOnInit(): void {
  }

}
