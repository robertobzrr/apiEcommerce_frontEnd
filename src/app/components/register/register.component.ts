import { Component } from '@angular/core';
import { RegisterFormsComponent } from "./register-forms/register-forms.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RegisterFormsComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
