import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';
import { HttpService } from '@nestjs/axios';

import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

@Injectable()
export class AtoCategoriesService {

  private path: string;
  private host_parametrics: string;
  private host_common: string;

  private requestConfig: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  constructor(
    private readonly httpService: HttpService
  ) {
    this.host_parametrics = process.env.HOST_PARAMETRICS;
    this.host_common = process.env.HOST_COMMON;
  }

  getAllAirports(): Observable<any> {

    this.path = `${this.host_common}/MS_BoACommonParametrics/GetAllAirports`;

    return this.httpService.get(`${this.path}`).pipe(
      switchMap((response: any) => {
        return of(response.data);
      })
    );
  }

  getAtoCategory(): Observable<any> {

    this.path = `${this.host_parametrics}/AtoServices/MS_Parametrics/GetAllAtoCategories`;

    return this.httpService.get(`${this.path}`).pipe(
      switchMap((response: any) => {
        return of(response.data);
      })
    );
  }

  createAtoCategory(ac: any): Observable<any>
  {
    this.path = `${this.host_parametrics}/AtoServices/MS_Parametrics/CreateCategoryAto`;
    return this.httpService.post(`${this.path}`, {
      id : 0,
      startDate_yyyyMMdd :ac.startDate_yyyyMMdd,
      endDate_yyyyMMdd : ac.endDate_yyyyMMdd,
      categorie : ac.categorie,
      atoId : ac.atoId
    }, this.requestConfig ).pipe(
      switchMap((response: any) => {
        // Return a new observable with the response
        return of(response.data);
      })
    );
  }

  updateAtoCategory(ac: any): Observable<any>
  {
    this.path = `${this.host_parametrics}/AtoServices/MS_Parametrics/UpdateCategoryAto`;
    return this.httpService.put(`${this.path}`, {
      id : ac.id,
      startDate_yyyyMMdd : ac.startDate_yyyyMMdd,
      endDate_yyyyMMdd : ac.endDate_yyyyMMdd,
      categorie : ac.categorie,
      atoId : ac.atoId
    }, this.requestConfig ).pipe(
      switchMap((response: any) => {
        // Return a new observable with the response
        return of(response.data);
      })
    );
  }

  deleteAtoCategory(id:number): Observable<any>
  {
    this.path = `${this.host_parametrics}/AtoServices/MS_Parametrics/DeleteCategoryAto/${id}`;
    return this.httpService.delete(`${this.path}`, this.requestConfig ).pipe(
      switchMap((response: any) => {
        // Return a new observable with the response
        return of(response.data);
      })
    );
  }
}
