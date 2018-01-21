
import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  golds: number;
  constructor (private _httpService: HttpService) { }


  ngOnInit() {
    this.getGoldFromService();
  }
 
  getFarmFromService() {
   
    // getextrafunction();
    let observable = this._httpService.getFarm();
    observable.subscribe(data => {
      console.log('farm gold!', data);
      this.golds = data.gold;
      console.log(data);

    });
    };
  getGoldFromService() {
    let observable = this._httpService.getGold();
    observable.subscribe(data => {
      console.log('Got our gold!', data);
      this.golds = data.gold;
      console.log('my bad', data);
    });
  }
    getCaveFromService(){
     
      let observable = this._httpService.getCave();
      observable.subscribe(data => {
        console.log('cave gold', data);
        this.golds = data.gold;
        console.log('got it', data)
      })
    
    // let fromFarm = this._httpService.getFarm();
    // fromFarm.subscribe(data =>)
  }
  getHouseFromService(){
     
    let observable = this._httpService.getHouse();
    observable.subscribe(data => {
      console.log('house gold', data);
      this.golds = data.gold;
      console.log('got it', data)
    })
  
  // let fromFarm = this._httpService.getFarm();
  // fromFarm.subscribe(data =>)
  }
  
  getCasinoFromService(){
     
    let observable = this._httpService.getCasino();
    observable.subscribe(data => {
      console.log('casino gold', data);
      this.golds = data.gold;
      console.log('got it', data);
    })
  }

  getRestart() {
    let observable = this._httpService.getRestart();
    observable.subscribe(data => {
      console.log('RESTART GOLD IS' , data);
      this.golds = data.gold;
      
    })
  }

// let fromFarm = this._httpService.getFarm();
// fromFarm.subscribe(data =>)
}

