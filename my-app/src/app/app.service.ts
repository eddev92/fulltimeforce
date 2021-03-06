import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Appservice {
  constructor(private httpClient: HttpClient) { }

  public getUsers() {
    return this.httpClient.get("http://localhost:8080/users");
  }

  public registerUser(body) {
    return this.httpClient.post("http://localhost:8080/user", body)
  }

}
