import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Produto } from '../models/produto';
import { AuthService } from '../services/authService';
import { produtoService } from '../services/produtoService';
import { ProdutoCardComponent } from '../components/produto-card/produto-card.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ProdutoCardComponent],
})
export class HomePage implements OnInit {

  produtos: Produto[] = [];
  textoNovo = '';
  mensagemErro = '';

  constructor(
    public auth: AuthService,
    public produtoService: produtoService,
    private router: Router,
  ) {
    this.produtos = this.produtoService.produtos
  }

  async ngOnInit() {
    const usuario = await this.auth.esperarUsuario();
    if (!usuario) {
      this.router.navigate(['/login']);
      return;
    }
  }

  comanda() {
    this.router.navigate(['/comanda'])
  }


  async sair() {
    await this.auth.sair();
    this.router.navigate(['/login']);
  }

  
}