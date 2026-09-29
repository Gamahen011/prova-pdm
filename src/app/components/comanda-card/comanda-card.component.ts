import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../../models/produto';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-comanda-card',
  templateUrl: './comanda-card.component.html',
  styleUrls: ['./comanda-card.component.scss'],
  imports: [IonicModule, CommonModule]
})
export class ComandaCardComponent  implements OnInit {

  constructor() {

   }

  ngOnInit() {}

  @Input() produto?: Produto;
  carrinho: Produto[] = []

  mais(produto: Produto) {
    produto.quantidade += 1
    this.carregarCarrinho();
    localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
  }

  menos(produto: Produto) {
    if (produto.quantidade > 1) {
      produto.quantidade -= 1
      localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
    } else {
      this.removerproduto(produto)
    }
  }

  removerproduto(produto: Produto) {
    this.carregarCarrinho();
    this.carrinho = this.carrinho.filter(p => p !== produto);

    localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
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
