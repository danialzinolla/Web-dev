import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Vacancy} from '../interfaces/Vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = 'http://localhost:8000'

  constructor(private http: HttpClient) { }

  // getVacancyList(): Observable<Vacancy[]> {
  //   return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies/`);
  // }

  getVacancyListByCompany(id): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/main/companies/${id}/vacancies`);
  }

  getVacancy(id): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.BASE_URL}/main/vacancies/${id}/`);
  }

  deleteVacancy(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/main/vacancies/${id}/`);
  }

}
