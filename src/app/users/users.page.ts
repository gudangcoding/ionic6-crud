import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/provider/restAPI';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  user: any = [];
  limit: number = 10;
  start: number = 0;
  name: string = "";

  constructor(private router: Router, private provider: Post) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.user = [];
    this.start = 0;
    this.tampil();
  }

  tambahUser() {
    this.router.navigate(['/add-usuario']);
  }

  tampil() {

    return new Promise(resolve => {
      this.user = [];
      let body = {
        aksi: 'listar',
        name: this.name,
        limit: this.limit,
        start: this.start
      };

      this.provider.postData(body, 'api.php').subscribe(data => {
        if (data['result'] == '0') {
          this.ionViewWillEnter();
        } else {
          for (let usuario of data['result']) {
            this.user.push(usuario);
          }
        }
        resolve(true);
      })
    });
  }

  edit(id, name, user, pass, level) {
    this.router.navigate(['/add-usuario/' + id + '/' + name + '/' + user + '/' + pass + '/' + level]);
  }

  tampilEdit(id, name, user, pass, level) {
    this.router.navigate(['/mostrar-usuario/' + id + '/' + name + '/' + user + '/' + pass + '/' + level]);
  }

  hapus(id) {
    return new Promise(resolve => {
      let body = {
        requisicao: 'hapus',
        id: id,
      };

      this.provider.postData(body, 'api.php').subscribe(data => {
        this.ionViewWillEnter();
      })
    });
  }

  //Refresh Data
  doRefresh(event) {
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 500);
  }


  //fungsi tampil Data
  loadData(event) {
    this.start += this.limit;

    setTimeout(() => {
      this.tampil().then(() => {
        event.target.complete();
      });
    }, 500);
  }

}
