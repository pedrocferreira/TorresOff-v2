import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parceiros } from '../../modelos/parceiros';

/*
  Generated class for the ParceirosListaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ParceirosListaProvider {


  constructor(public http: HttpClient) {
    
  }
  lista(){
    return this.http.get<Parceiros[]>('http://apitorresoff-com.umbler.net/torresoff/parceiros');//botar localhost aqui para testar listaPArceiors, depois dar deploy na api no umbler...ps:tem que achar o destino do deploy
  }
  listParceiros(id:number){
    return new Promise((resolve,reject)=>{
      var data ={
        id : id 
      };

      
      this.http.post<Parceiros[]>('http://apitorresoff-com.umbler.net/torresoff/parceiros',data)
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
