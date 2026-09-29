import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../../models/produto';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.scss'],
  imports: [IonicModule, CommonModule]
})
export class ProdutoCardComponent  implements OnInit {

  @Input() produto?: Produto;
  carrinho: Produto[] = []

  constructor() { }

  ngOnInit() {}

  colocarComanda(produto: Produto) {
  this.carregarCarrinho();

  const jaExiste = this.carrinho.some(item => item.id === produto.id);

  if (jaExiste) {
    return;
  }

  produto.quantidade = 1
  this.carrinho.push(produto);


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

