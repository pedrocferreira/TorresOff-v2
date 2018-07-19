import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaMercadosPage } from '../lista-mercados/lista-mercados';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private admobFree: AdMobFree) {

  }
  gomarket(){
    this.navCtrl.push(ListaMercadosPage);
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
