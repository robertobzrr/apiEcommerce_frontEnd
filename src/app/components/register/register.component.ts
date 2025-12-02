import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

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

}
