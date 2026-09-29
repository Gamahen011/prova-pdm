import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { produtoService } from '../services/produtoService';
import { Produto } from '../models/produto';
import { ComandaCardComponent } from '../components/comanda-card/comanda-card.component';


@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.page.html',
  styleUrls: ['./comanda.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ComandaCardComponent]
})
export class ComandaPage implements OnInit {

  

  constructor(
    private router: Router,
    public produtoservice: produtoService
  ) { 
     
  }
  produtos: Produto[] = this.produtoservice.produtos
  carrinho: Produto[] = []
  

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.carregarCarrinho();
}

  cardapio() {
    this.router.navigate(['/home'])
  }

  carregarCarrinho() {
  const carrinhoSalvo = localStorage.getItem('carrinho');

  if (carrinhoSalvo) {
    this.carrinho = JSON.parse(carrinhoSalvo);
  } else {
    this.carrinho = [];
  }
}
}
