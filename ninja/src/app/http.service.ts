import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getGold();
    this.getFarm();
   }

   getGold() {
     return this._http.get('/gold');
    //  let tempObservable = this._http.get('/gold');
    //  tempObservable.subscribe(data => console.log('Got oour gold', data));
   }
   getFarm() {
     console.log('getFarm is hit');
     return this._http.get('/gold/farm');
   }

   getCave(){
     console.log('cave is hit');
     return this._http.get('/gold/cave')
   }

   getHouse(){
     console.log('house is hit');
     return this._http.get('/gold/house')
   }
   getCasino(){
     console.log('casino is hit');
     return this._http.get('/gold/casino')
   }
   getRestart() {
     console.log('Restart button is hit');
     return this._http.get('/gold/restart');
   }
    
}
