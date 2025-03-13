import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7299/api/v1/users/authentication';


  constructor(private http: HttpClient) { }

  authenticate(userData: any) :Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}
