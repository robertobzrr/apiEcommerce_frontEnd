import { Component } from '@angular/core';
import { FormsComponent } from '../forms/forms.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
