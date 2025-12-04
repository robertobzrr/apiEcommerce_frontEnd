import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface UserRequestDTO {
  name: string;
  email: string;
  password: string;
}

export interface UserResponseDTO {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/users';
  
  constructor() { }

  createUser(user: UserRequestDTO): Observable<void> {
    return this.http.post<void>(this.apiUrl, user);
  }

  findAllUsers(): Observable<UserResponseDTO[]> {
    console.log('users from DB');
    return this.http.get<UserResponseDTO[]>(this.apiUrl).pipe(
      tap(users => console.log('received:', users))
    );
  }

  findUserById(id: number): Observable<UserResponseDTO> {
    return this.http.get<UserResponseDTO>(`${this.apiUrl}/${id}`);
  }

}
