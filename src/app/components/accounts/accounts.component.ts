import { Component, inject } from '@angular/core';
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
  
  users: UserResponseDTO[] = [];

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    console.log('users from DB');
    
    this.accountService.findAllUsers().subscribe({
      next: (usersFromAPI) => {
        console.log('received:', usersFromAPI);
        this.users = usersFromAPI;
      },
      error: (error) => {
        console.error('error', error);
      }
    });
  }

}
