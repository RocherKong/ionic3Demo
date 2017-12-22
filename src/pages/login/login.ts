import { BackButtonService } from './../../services/backButton.service';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(public navCtrl: NavController
    , public navParams: NavParams
    ,public modalCtrl:ModalController
    ,private platform:Platform
    ,private backButtonService:BackButtonService
  ) {
    this.platform.ready().then(()=>{
      this.backButtonService.registerBackButtonAction(null);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {
      alert("请输入账号");
    } else if (password.value.length == 0) {
      alert("请输入密码");
    } else {
      let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
      alert(userinfo);
      //this.navCtrl.push(TabsPage);
      let modal=this.modalCtrl.create(TabsPage);
      modal.present();
    }
  }

}
