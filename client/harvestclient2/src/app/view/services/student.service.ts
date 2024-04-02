import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {student} from "../entity/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

 // @ts-ignore
  async  getAll():Promise<student[]>{
    const url ='http://localhost:8080/details'
    // @ts-ignore
    return this.http.get<student[]>(url).toPromise();
  }

  async delete(id:Number):Promise<void>{
    const url = `http://localhost:8080/details/${id}`
    await this.http.delete<void>(url).toPromise();

  }

  async get(id:number):Promise<student | undefined>{
    const url = `http://localhost:8080/details/${id}`
    return await this.http.get<student>(url).toPromise();
  }
}
