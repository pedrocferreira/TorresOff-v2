import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MercadosListaProvider } from '../../providers/mercados-lista/mercados-lista';
import { Mercado } from '../../modelos/mercados';
import { ImageViewerController } from 'ionic-img-viewer';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

/**
 * Generated class for the FolderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-folder',
  templateUrl: 'folder.html',
})
export class FolderPage {


  imagens: string[];
  imageViewerCtrl: ImageViewerController;

  idd: 'ca-app-pub-2737682622417948/8624986329';

  id = "";
  url1 = "";
  url2 = "";
  url3 = "";
  url4 = "";
  url5 = "";
  url6 = "";
  url7 = "";
  url8 = "";
  nome = "";
  endereco = "";
  public mercados: Mercado[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
     public http: HttpClient,
      public alertCtrl: AlertController, 
      public mercadoService: MercadosListaProvider,
       imageViewerCtrl: ImageViewerController,
        private admobFree: AdMobFree) {
          








    this.imageViewerCtrl = imageViewerCtrl;
    this.id = this.navParams.get('parms');
    this.url1 = this.navParams.get('parms1');
    this.url2 = this.navParams.get('parms2');
    this.url3 = this.navParams.get('parms3');
    this.url4 = this.navParams.get('parms4');
    this.url5 = this.navParams.get('parms5');
    this.url6 = this.navParams.get('parms6');
    this.url7 = this.navParams.get('parms7');
    this.url8 = this.navParams.get('parms8');
    this.nome = this.navParams.get('parms9');
    this.endereco = this.navParams.get('parms10');
    this.imagens = [this.url1, this.url2, this.url3, this.url4, this.url5,this.url6, this.url7, this.url8];



    this.mercadoService.lista()
      .subscribe(
        (mercados) => {
          this.mercados = mercados;

        },
        (error: HttpErrorResponse) => {
          console.log(error);

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
  presentImage(myImage) {
    const imageViewer = this.imageViewerCtrl.create(myImage);
    imageViewer.present();
  }

  ionViewDidLoad() {

    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-2737682622417948/8624986329',
      isTesting: false,
      autoShow: true
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare()
      .then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
      })
      .catch(e => console.log(e));
    }
  } 




