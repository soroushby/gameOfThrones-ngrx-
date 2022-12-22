import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAllCharacters() {
    return this.http.get('https://thronesapi.com/api/v2/Characters');
  }
}
