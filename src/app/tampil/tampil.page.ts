import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/provider/restAPI';

@Component({
  selector: 'app-mostrar-usuario',
  templateUrl: './mostrar-usuario.page.html',
  styleUrls: ['./mostrar-usuario.page.scss'],
})
export class MostrarUsuarioPage implements OnInit {

  id: string = ""
  nome: string = ""
  usuario: string = ""
  senha: string = ""
  nivel: string = ""

  constructor(
    private actRouter: ActivatedRoute, 
    private router: Router, 
    private provider: Post) { }

  ngOnInit() {
    this.actRouter.params.subscribe((data: any) => {
      this.id = data.id;
      this.nome = data.nome;
      this.usuario = data.usuario;
      this.senha = data.senha;
      this.nivel = data.nivel;
    });
  }

  usuarios() {
    this.router.navigate(['/usuarios'])
  }

}
