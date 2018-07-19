import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mercado } from '../../modelos/mercados';

/*
  Generated class for the MercadosListaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MercadosListaProvider {


  constructor(public http: HttpClient) {
    
  }
  lista(){
    return this.http.get<Mercado[]>('http://apitorresoff-com.umbler.net/torresoff/mercados')
  }
  listFolder(id:number){
    return new Promise((resolve,reject)=>{
      var data ={
        id : id 
      };
      this.http.post<Mercado[]>('http://apitorresoff-com.umbler.net/torresoff/mercados/avatar',data)
        .subscribe((result: any)=>{
          resolve(result.json());
        },
        (error)=> {
          reject(error.json());
        }
      )
    })
  }


  

}
