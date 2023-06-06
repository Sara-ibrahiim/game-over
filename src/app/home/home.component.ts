import { Carts } from './../carts';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  gamesData:Carts []=[]
  gamesData2:Carts []=[]
  gamesData3:Carts []=[]
  id:any
  id2:any
  id3:any
  title1 : any
  thumbnail1:any
  title2 : any
  thumbnail2:any
  title3 : any
  thumbnail3:any
  constructor(private _HomeService:HomeService){}
  ngOnInit(): void {
    this._HomeService.getdataGames1().subscribe({
      next:(res:any) => {
        console.log(res)
        this.gamesData=res;
        this.title1=res.title
        this.thumbnail1=res.thumbnail
        this.id=res.id



      },

    })
    this._HomeService.getdataGames2().subscribe({
      next:(res:any) => {
        console.log(res)
        this.gamesData2=res;
        this.title2=res.title
        this.thumbnail2=res.thumbnail
        this.id2=res.id




      },

    })
    this._HomeService.getdataGames3().subscribe({
      next:(res:any) => {
        console.log(res)
        this.gamesData3=res;
        this.title3=res.title
        this.thumbnail3=res.thumbnail
        this.id3=res.id


      },

    })

    
  }
 
}
