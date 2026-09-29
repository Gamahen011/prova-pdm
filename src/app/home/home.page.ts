import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Produto } from '../models/produto';
import { AuthService } from '../services/authService';
import { produtoService } from '../services/produtoService';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage implements OnInit {

  produtos: Produto[] = [];
  textoNovo = '';
  mensagemErro = '';
  carrinho: Produto[] = [];

  constructor(
    public auth: AuthService,
    private produtoService: produtoService,
    private router: Router,
  ) {}

  async ngOnInit() {
    const usuario = await this.auth.esperarUsuario();
    if (!usuario) {
      this.router.navigate(['/login']);
      return;
    }
  }

  onProdutoSelecionado(evento: {id?: number}) {
    const id = evento.id;
    let produtoSelecionado = this.produtos.find(p => p.id === id);
    if (id) {
      this.carrinho.push(produtoSelecionado!);
    }
}
  async carregar() {
     // this.produtos = await this.produtoService.listar();
  }



  async sair() {
    await this.auth.sair();
    this.router.navigate(['/login']);
  }

  
}