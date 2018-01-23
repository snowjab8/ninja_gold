import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getGold();
   }

   getGold() {
     return this._http.get('/gold');
    //  let tempObservable = this._http.get('/gold');
    //  tempObservable.subscribe(data => console.log('Got oour gold', data));
   }
   getFarm(num) {
     console.log('getFarm is hit');
     console.log('Hello from service', num.num);
     return this._http.put('/gold/farm', num);
   }

   getCave(num){
     console.log('cave is hit');
     return this._http.put('/gold/cave', num)
   }

   getHouse(num){
     console.log('house is hit');
     return this._http.put('/gold/house', num)
   }
   getCasino(num){
     console.log('casino is hit');
     return this._http.put('/gold/casino', num)
   }
   getRestart() {
     console.log('Restart button is hit');
     return this._http.get('/gold/restart');
   }
    
}
