
import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  golds: number;
  activity_log: Array<string> = [];
  constructor (private _httpService: HttpService) { }


  ngOnInit() {
    this.getGoldFromService();
  }
 
  getFarmFromService() {
    const random_number = Math.floor(Math.random() * 4) + 2
    this.activity_log.push( `You won ${random_number} gold from Farming`); 
    let observable = this._httpService.getFarm({num: random_number});
    observable.subscribe(data => {
      console.log('farm gold!', data);
      this.golds = data['gold'];
      console.log(data);

    });
    };
  getGoldFromService() {
    let observable = this._httpService.getGold();
    observable.subscribe(data => {
      console.log('Got our gold!', data);
      this.golds = data['gold'];
    });
  }
    getCaveFromService(){
      const random_number = Math.floor(Math.random() * 6) + 5
      this.activity_log.push( `You won ${random_number} gold from spelunking`) 
      let observable = this._httpService.getCave({num: random_number});
      observable.subscribe(data => {
        console.log('cave gold', data);
        this.golds = data['gold'];
        console.log('got it', data)
      })
    
    // let fromFarm = this._httpService.getFarm();
    // fromFarm.subscribe(data =>)
  }
  getHouseFromService(){
    const random_number = Math.floor(Math.random() * 10) + 7
    this.activity_log.push( `You won ${random_number} gold from flipping houses`);
    let observable = this._httpService.getHouse({num: random_number});
    observable.subscribe(data => {
      console.log('house gold', data);
      this.golds = data['gold'];
      console.log('got it', data)
    })
  
  // let fromFarm = this._httpService.getFarm();
  // fromFarm.subscribe(data =>)
  }
  
  getCasinoFromService(){
    const random_number = Math.floor(Math.random() * 201) - 100
    if( random_number > 0){
      this.activity_log.push( `You won ${random_number} gold from casion`);
    } else {
      this.activity_log.push( `house always wins, you lost  ${random_number} `);
    }
    let observable = this._httpService.getCasino({num: random_number});
    observable.subscribe(data => {
      console.log('casino gold', data);
      this.golds = data['gold'];
      console.log('got it', data);
    })
  }

  getRestart() {
    let observable = this._httpService.getRestart();
    observable.subscribe(data => {
      console.log('RESTART GOLD IS' , data);
      this.golds = data['gold'];
    
      
    })
    this.activity_log = []
  }

// let fromFarm = this._httpService.getFarm();
// fromFarm.subscribe(data =>)
}

