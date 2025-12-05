import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService, UserRequestDTO, UserResponseDTO } from '../../../services/account/account.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './account-edit.component.html',
  styleUrl: './account-edit.component.css'
})
export class AccountEditComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private accountService = inject(AccountService);
  
  user: UserRequestDTO = {
    name: '',
    email: '',
    password: ''
  };
  
  userId: number = 0;
  isLoading: boolean = true;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      this.loadUser();
    });
  }

  loadUser() {
    this.isLoading = true;
    this.accountService.findUserById(this.userId).subscribe({
      next: (userResponse: UserResponseDTO) => {
        this.user = {
          name: userResponse.name,
          email: userResponse.email,
          password: ''
        };
        this.isLoading = false;
      },
      error: (error) => {
        console.error('error loading user:', error);
        this.isLoading = false;
      }
    });
  }

  onSubmit() {
    this.accountService.updateUserById(this.userId, this.user).subscribe({
      next: () => {
        this.router.navigate(['/accounts']);
      },
      error: (error) => {
        console.error('error update:', error);
      }
    });
  }

  cancel() {
    this.router.navigate(['/accounts']);
  }

  deleteUser() {
    if (confirm('delete user?')) {
      this.accountService.deleteUser(this.userId).subscribe({
        next: () => {
          this.router.navigate(['/accounts']);
        },
        error: (error) => {
          console.error('error:', error);
        }
      });
    }
  }
}