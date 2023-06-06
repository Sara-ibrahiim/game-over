import { Carts } from './../carts';

import { GamesService } from './../games.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  // constructor(private _ActivatedRoute:ActivatedRoute ,private _GamesService:GamesService){}
  // GameDeatils :any
  // gameId:any;


  id: any;
  item: any = {};
  loading = false;
  hideImage = false;
  'background-image' = '';
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _GamesService: GamesService
  ) {
    this.loading = true;

    this.id = _ActivatedRoute.snapshot.paramMap.get('id');
    this._GamesService.getGameDetails(this.id).subscribe((data) => {
      this.item = data;
      // console.log(data);

      this.loading = false;
    });
  }

  hideGameImage() {
    this.hideImage = !this.hideImage;
  }



ngOnInit(): void {
  // this._ActivatedRoute.paramMap.subscribe((params)=> {
  //   console.log(params.get('id')); 

  // })

  // this._GamesService.getGameDeatils(this.gameId).subscribe({
  //   next:(res)=>{
  //     this.GameDeatils =res
    
}


    
}
  

/*
title:any
thumbnail: any
short_description:any
game_url: any
genre:any
platform: any
publisher: any
developer: any
release_date: any
freetogame_profile_url:any
description:any

this.title=res.title
this.thumbnail =res.thumbnail
this.short_description=res.short_description
this.game_url =res.ame_url
this.genre=res.genre
this.platform =res.platform
this.publisher =res.publisher
this.publisher =res.publisher    
this.description =res.description
this.release_date =res.release_date
this.freetogame_profile_url =res.freetogame_profile_url
*/