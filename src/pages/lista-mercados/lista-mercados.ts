import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FolderPage } from '../folder/folder';
import { Mercado } from '../../modelos/mercados';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MercadosListaProvider } from '../../providers/mercados-lista/mercados-lista';


/**
 * Generated class for the ListaMercadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lista-mercados',
  templateUrl: 'lista-mercados.html',
})
export class ListaMercadosPage {

  public mercados: Mercado[];
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient,
    public alertCtrl: AlertController,
    public mercadoService: MercadosListaProvider,
    private loadingCtrl : LoadingController
    
  ) {
    for (let i = 0; i < 30; i++) {
      this.items.push(this.items.length);
    }

    let loading = this.loadingCtrl.create({
      content: 'Aguarde o carragamento dos mercados'
    })

    loading.present();


    this.mercadoService.lista()
      .subscribe(
        (mercados) => {
          this.mercados = mercados;
          loading.dismiss();

        },
        (error: HttpErrorResponse) => {
          console.log(error);
          loading.dismiss();

          this.alertCtrl.create({
            title: 'Falha na conexão',
            subTitle: 'Não foi possivel carregar os mercados, tente novamente mais tarde ',
            buttons: [
              { text: 'OK' }
            ]
          }).present();
        }
      );

  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push(this.items.length);
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }


  ionViewDidLoad() {


  }
  goToFolder(id,url1, url2, url3, url4, url5, url6, url7, url8,nome,endereco) {
    this.navCtrl.push(FolderPage, {
      parms: id,
      parms1: url1,
      parms2: url2,
      parms3: url3,
      parms4: url4,
      parms5: url5,
      parms6: url6,
      parms7: url7,
      parms8: url8,
      parms9: nome,
      parms10: endereco
    });
    
  }
  






}
