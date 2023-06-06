import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  
  headers = {
    'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  };

  constructor(private _HttpClient: HttpClient ) { }


data = {'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68' ,
'X-RapidAPI-Host' : 'free-to-play-games-database.p.rapidapi.com'};
//baseUrl: string = 'https://free-to-play-games-database.p.rapidapi.com/api/games'


  getAllGames():Observable <any>{

    return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games',{headers: this.data})
  };
  // getGameDeatils(id:string):Observable <any>{

  //   return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,{headers: this.data})
  // };

  getGameDetails(gameID:number): Observable<any> {
    return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/game',{
      headers:this.data,
      params:{
        id:gameID
      }
    });
  }

//  getPcgames(id:string):Observable <any>{
//     return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${id}`,{headers: this.data})

//   };
//   getsort(id:string):Observable <any>{
//     return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${id}`,{headers: this.data})

//   };

  
//   getcategory(id:string):Observable <any>{
//     return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${id}`,{headers: this.data})

//   };

getGamesByCategory(category:string): Observable<any> {
  return this._HttpClient.get(
    'https://free-to-play-games-database.p.rapidapi.com/api/games',
    {
      params: { category: category },
      headers: this.headers,
    }
  );
}

getGamesByPlatform(platform:string): Observable<any> {
  return this._HttpClient.get(
    'https://free-to-play-games-database.p.rapidapi.com/api/games',
    {
      params: { platform: platform },
      headers: this.headers,
    }
  );
}

getSortedGames(sortedBy:string): Observable<any> {
  return this._HttpClient.get(
    'https://free-to-play-games-database.p.rapidapi.com/api/games',
    {
      params: { 'sort-by': sortedBy },
      headers: this.headers,
    }
  );
} 


}
