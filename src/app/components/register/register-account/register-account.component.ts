import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-account',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-account.component.html',
  styleUrl: './register-account.component.css'
})
export class RegisterAccountComponent {

  
  name: string = '';
  password: string = '';
  email: string = '';


  constructor() { 
    console.log('REGISTER INIATIALIZED');
  }

  ngOnInit(){
    console.log('REGISTER ngOnInit CALLED');
  }  

  ngOnChanges(){
    console.log('REGISTER ngOnChanges CALLED');
  }

  ngAfterViewInit(){
    console.log('REGISTER ngAfterViewInit CALLED');
  }


  changeAccount(){
    console.log('new name:', this.name);
    console.log('new password:', this .password);
    console.log('new email:', this.email);
    alert('Name changed to: ' + this.name + '\nPassword changed to: ' + this.password + '\nEmail changed to: ' + this.email);
  }


}
