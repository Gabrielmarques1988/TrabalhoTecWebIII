import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
constructor(private http: HttpClient) { }

  getForms(): Observable<any>{
    return this.http.get(
      `http://http://localhost:4200/form`,{}
    )
  }

  getFormPorId(name: string): Observable<any>{
    return this.http.get(
      `http://localhost:4200/form/${name}`
    );
  }
}


