
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


/*
  Generated class for the ServerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServerProvider {
  url = "http://apitorresoff-com.umbler.net/torresoff/mercados"

  
  constructor(public http: HttpClient) {
    console.log('Hello ServerProvider Provider');
  }
  all(){
    return this.http.get(this.url);
  }

}
