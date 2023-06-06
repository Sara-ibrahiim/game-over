import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _HttpClient: HttpClient ) { }
  

  data = {'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68' ,
  'X-RapidAPI-Host' : 'free-to-play-games-database.p.rapidapi.com'};

  
 
    getdataGames1():Observable <any>{
     
      return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=365`,{headers: this.data})
    };
    getdataGames2():Observable <any>{
     
      return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=523`,{headers: this.data})
    };
    getdataGames3():Observable <any>{
     
      return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=475`,{headers: this.data})
    };
}
