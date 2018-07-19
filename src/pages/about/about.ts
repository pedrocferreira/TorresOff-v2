import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import { Parceiros } from "../../modelos/parceiros";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ParceirosListaProvider } from '../../providers/parceiros-lista/parceiros-lista';
import { ImageViewerController } from 'ionic-img-viewer';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})


export class AboutPage {
  
  items = [];

  urll= "";
  public parceiros: Parceiros[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient,
    public alertCtrl: AlertController,
    public parceirosService: ParceirosListaProvider,
    private loadingCtrl: LoadingController,
    public imageViewerCtrl: ImageViewerController

  ) {

    let loading = this.loadingCtrl.create({
      content: 'Aguarde o carragamento dos mercados'
    })

    loading.present();


    this.parceirosService.lista()
      .subscribe(
      (parceiros) => {
          this.parceiros = parceiros;
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


  doRefresh(refresher) {
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);

    let loading = this.loadingCtrl.create({
      content: 'Aguarde o carragamento dos mercados'
    })

    loading.present();


    this.parceirosService.lista()
      .subscribe(
        (parceiros) => {
          this.parceiros = parceiros;
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
  
  wp(linkWhats){
    window.open(linkWhats);
  }

  map(map){
    window.open(map);
  }
  presentImage(myImage) {
    const imageViewer = this.imageViewerCtrl.create(myImage);
    imageViewer.present();
  }


  ionViewDidLoad() {


  }
  doInfinite(): Promise<any> {
    console.log('Begin async operation');

    return new Promise((resolve) => {
      setTimeout(() => {
        for (var i = 0; i < 30; i++) {
          this.items.push(this.items.length);
        }

        console.log('Async operation has ended');
        resolve();
      }, 500);
    })
  }
}
  
