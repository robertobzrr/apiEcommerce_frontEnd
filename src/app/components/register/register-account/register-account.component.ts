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

  
  name = 'RobertoTest';


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


  changeName(){
    console.log('new name:', this.name);
  }


}
