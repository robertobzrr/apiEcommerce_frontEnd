import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService, UserResponseDTO } from '../../services/account/account.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent {

  private accountService = inject(AccountService);
  private router = inject(Router);
  
  users: UserResponseDTO[] = [];

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.accountService.findAllUsers().subscribe({
      next: (usersFromAPI) => {
        this.users = usersFromAPI;
      },
      error: (error) => {
        console.error('error', error);
      }
    });
  }

  editAccount(userId: number) {
    this.router.navigate(['/accounts/edit', userId]);
  }

}
