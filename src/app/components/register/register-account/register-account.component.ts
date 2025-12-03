import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService, UserRequestDTO } from '../../../services/account/account.service';

@Component({
  selector: 'app-register-account',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-account.component.html',
  styleUrl: './register-account.component.css'
})
export class RegisterAccountComponent {

  private accountService = inject(AccountService);

  user = {
    name: '',
    email: '',
    password: ''
  };

  message = '';

  constructor() { 
    console.log('REGISTER ACCOUNT INITIALIZED');
  }

  onSubmit() {
    if (!this.user.name || !this.user.email || !this.user.password) {
      this.message = 'enter all boxs infos';
      return;
    }

    this.message = '';

    this.accountService.createUser(this.user).subscribe({
      next: () => {
        this.message = 'created';
        this.user = { name: '', email: '', password: '' };
      },
      error: (error) => {
        this.message = 'error.';
        console.error('Error:', error);
      }
    });
  }

}
