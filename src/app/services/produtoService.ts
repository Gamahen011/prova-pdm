import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../firebase.config';
import { Produto } from '../models/produto';

@Injectable({ providedIn: 'root' })
export class produtoService {

  produtos:  Produto[] = [
    { id: 1, nome: 'Porção de batata', preco: 35, doce: false, esgotado: false, ultimasunidades: false },
    { id: 2, nome: 'Brigadeiro', preco: 20, doce: true, esgotado: false, ultimasunidades: false },
    { id: 3, nome: 'Pudim de leite', preco: 15, doce: true, esgotado: false, ultimasunidades: false }  
  ];



}