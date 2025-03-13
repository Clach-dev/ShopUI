import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'https://localhost:7299/api/v1/users/registration';


  constructor(private httpClient: HttpClient) { }

  register(userData: any) :Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.httpClient.post(this.apiUrl, userData, { headers });
  }
}
