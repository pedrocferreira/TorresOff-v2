import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-intro',
    templateUrl: 'intro.html',
})
export class IntroPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }


    contato() {
        window.open("https://api.whatsapp.com/send?phone=5551981281898&text=Olá!+")

    }

    goTopage() {
        localStorage.setItem("slide", "true");
        this.navCtrl.push(TabsPage);
    }

}
