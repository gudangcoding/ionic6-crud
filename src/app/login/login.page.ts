import { ToastController } from '@ionic/angular';
import { Component, OnInit, Provider } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Post } from 'src/provider/restAPI';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string = "";
  pass: string = "";

  constructor(
    private storage: NativeStorage, 
    private router: Router, 
    private provider: Post, 
    public toast: ToastController
    ) { }

  ngOnInit() {
  }

  async login() {
    if (this.user == "") {
      const toast = await this.toast.create({
        message: 'user Masih Kosong',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
    }

    if (this.pass == "") {
      const toast = await this.toast.create({
        message: 'Password Masih Kosong',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
    }

    let body = {
      aksi: 'login',
      email: this.user,
      password: this.pass

    };

    this.provider.postData(body, 'api/login').subscribe(async data => {
      var alert = data['msg'];
      if (data['success']) {
        this.storage.setItem('session_storage', data['result']);
        this.router.navigate(['/folder']);
        const toast = await this.toast.create({
          message: 'Login Succes!',
          duration: 1000,
          color: 'success'
        });
        toast.present();
        this.user = "";
        this.pass = "";
        console.log(data);
      } else {
        const toast = await this.toast.create({
          message: alert,
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      }
    });

  }


}
