import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.scss'],
})
export class ProdutoCardComponent  implements OnInit {

  @Input() produto?: Produto;
  @Output() selecionado = new EventEmitter<{id?: number}>();

  constructor() { }

  ngOnInit() {}

  colocarComanda() {
    this.selecionado.emit({id: this.produto?.id});
  }
}

