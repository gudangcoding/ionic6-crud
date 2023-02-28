import { Post } from '../../provider/restAPI';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class TambahPage implements OnInit {

  id: string = ""
  name: string = ""
  user: string = ""
  pass: string = ""
  level: string = ""

  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController) { }

  ngOnInit() {
    this.actRouter.params.subscribe((data: any) => {
      this.id = data.id;
      this.name = data.name;
      this.user = data.user;
      this.pass = data.pass;
      this.level = data.level;
    });
  }

  async mensagemSalvar() {
    const toast = await this.toastController.create({
      message: 'Tambah Data sucess!',
      duration: 1000
    });
    toast.present();
  }

  users() {
    this.router.navigate(['/users'])
  }

  cadastrar() {
    return new Promise(resolve => {
      let body = {
        requisicao: 'add',
        name: this.name,
        user: this.user,
        pass: this.pass,
        level: this.level,
      };

      this.provider.postData(body, 'api.php').subscribe(data => {
        this.router.navigate(['/users']);
        this.mensagemSalvar();
      })
    });
  }


  editar() {
    return new Promise(resolve => {
      let dados = {
        requisicao: 'editar',
        id: this.id,
        name: this.name,
        user: this.user,
        pass: this.pass,
        level: this.level,
      };

      this.provider.postData(dados, 'users').subscribe(data => {
        this.router.navigate(['/users']);
        this.mensagemSalvar();
      })
    });
  }

}
