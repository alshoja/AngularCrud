import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = environment.URL

  constructor(private http: HttpClient) { }

  public getClients() {
    const head = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer '+token
    })
    
    return this.http.get(this.url + 'users', { headers: head })
  }

  public getClientbyid(id: number) {
    const head = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
    return this.http.get(this.url + 'user/' + id, { headers: head })
  }

  public postClients(body: any) {

    // let body = {
    //   "name": item.name,
    //   "email": item.email,
    //   "type": item.type,
    //   "password": item.password
    // }

    const head = new HttpHeaders({
      'Accept': 'Application/json',
      'Content-Type': 'application/json'
    })
    return this.http.post(this.url + 'signup', body, { headers: head })
  }


  public updateClients(id: number, items : any) {
    const body = {
      'name': items.name,
      'email': items.email,
      'type': items.type
    }
    const head = new HttpHeaders({
      'Accept': 'Application/json',
      'Content-Type': 'application/json'
    })
    return this.http.put(this.url + 'user/' + id, body, { headers: head })
  }

  public deleteClients(id: number) {
    const head = new HttpHeaders({
      'Accept': 'Application/json',
      'Content-Type': 'application/json'
    })
    return this.http.delete(this.url + 'user/' + id, { headers: head, observe: "response" })
  }
}
