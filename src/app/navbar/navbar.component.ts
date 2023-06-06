import { Component, OnInit } from '@angular/core';
import { Carts } from '../carts';
import { GamesService } from '../games.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  Number: number = 20;
  gameArray = [];
  data : Carts[]=[];
  isLogin: boolean = false
  constructor(private _GamesService: GamesService, private _AuthService:AuthService){
    _AuthService.userProfile.subscribe({
      next: () => {
        if (_AuthService.userProfile.getValue() !== null) {
  
          this.isLogin = true;
       }
       else{
         this.isLogin = false;
       }
  
      }
    })
  }

  logout(){
  this._AuthService.logout()
}





  // getPc(id:string){
  //   this._GamesService.getPcgames(id).subscribe({
  //     next:(res:any) => {
  //       console.log(res)
        
  //       this.gameArray= res
  //     this.data=this.gameArray.slice(0,20);


  //     },

  //   })
  // }




  // getGame(id:string){
  //   this._GamesService.getsort(id).subscribe({
  //     next:(res:any) => {
  //       console.log(res)
        
  //       this.gameArray= res
  //     this.data=this.gameArray.slice(0,20);


  //     },

  //   })
  // }
  // getGamesC(id:string){
  //   this._GamesService. getcategory(id).subscribe({
  //     next:(res:any) => {
  //       console.log(res)
        
  //       this.gameArray= res
  //     this.data=this.gameArray.slice(0,20);


  //     },

  //   })
  // }

  seeMore() {
    this.Number += 20;
    this.data = this.gameArray.slice(0, this.Number);
  }

 





  
}
