

import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Carts } from '../carts';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  Number: number = 20;
  gameArray = [];
  data : Carts[]=[];


  constructor(private _GamesService: GamesService){
    
  }

  ngOnInit(): void {
 
     
this.data_all()
  
     
      
  }

  data_all(){
    this._GamesService.getAllGames().subscribe({
      next:(res:any) => {
        console.log(res)
        this.gameArray= res
        this.data=this.gameArray.slice(0,20);


      

      },

    })
  }

  seeMore() {
    this.Number += 20;
    this.data = this.gameArray.slice(0, this.Number);
  }

 /*
  displayData : Carts[]=[];
 
  showMore() {
    let newLength = this.displayData.length + 19;
    if (newLength > this.gamesDataAll.length) {
        newLength = this.gamesDataAll.length
    }
     this.displayData = this.gamesDataAll.slice(0, newLength);
  }
*/

}
