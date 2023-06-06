import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carts } from '../carts';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  Number: number = 20;
  gamesArray = [];
  dataGames : Carts[]=[];
  loading = false;
  x = new Array(8)
  gamesBy: any;
  selected: any;

  constructor(private _GamesService: GamesService,
    private _ActivatedRoute: ActivatedRoute){

      this.getGames();

  }


  getGames() {
    this._ActivatedRoute.paramMap.subscribe((params) => {
      this.loading = true;
      this.gamesBy = params.get('gamesBy');
      this.selected = params.get('selected');

      if (this.gamesBy == 'Categories') {
        this._GamesService
          .getGamesByCategory(this.selected)
          .subscribe((data) => {
            this.gamesArray = data;
            this.dataGames = this.gamesArray.slice(0, 20);
            this.loading = false;
          });
      } else if (this.gamesBy == 'sort-by') {
        this._GamesService.getSortedGames(this.selected).subscribe((data) => {
          this.gamesArray = data;
          this.dataGames = this.gamesArray.slice(0, 20);
          this.loading = false;
        });
      } else if (this.gamesBy == 'Platforms') {
        this._GamesService
          .getGamesByPlatform(this.selected)
          .subscribe((data) => {
            this.gamesArray = data;
            this.dataGames = this.gamesArray.slice(0, 20);
            this.loading = false;
          });
      } 
      
    });
  }

 





  seeMore() {
    this.Number += 20;
    this.dataGames = this.gamesArray.slice(0, this.Number);
  }
  ngOnInit(): void {
  //  this.getPc();
  

  }

}
