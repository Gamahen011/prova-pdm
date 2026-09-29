import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../services/authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class LoginPage {

  email = '';
  senha = '';
  mensagemErro = '';

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  async login() {
    this.mensagemErro = '';

    if (!this.email || !this.senha) {
      this.mensagemErro = 'Preencha e-mail e senha.';
      return;
    }

    try {
      await this.auth.login(this.email, this.senha);
      this.router.navigate(['/home']);
    } catch (e: any) {
      this.mensagemErro = this.auth.traduzirErro(e.code);
      this.senha = '';
    }
  }

  async loginGoogle() {
    this.mensagemErro = '';

    try {
      await this.auth.loginComGoogle();
      this.router.navigate(['/home']);
    } catch (e: any) {
      this.mensagemErro = this.auth.traduzirErro(e.code);
    }
  }

}