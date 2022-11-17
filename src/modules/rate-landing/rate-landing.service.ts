import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';
import { HttpService } from '@nestjs/axios';

import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

@Injectable()
export class RateLandingService {

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

  getAllCurrencys(): Observable<any> {

    this.path = `${this.host_common}/MS_BoACommonParametrics/GetAllCurrencys`;

    return this.httpService.get(`${this.path}`).pipe(
      switchMap((response: any) => {
        return of(response.data);
      })
    );
  }

  getAllEntities(): Observable<any> {

    this.path = `${this.host_parametrics}/AtoServices/MS_Parametrics/GetAllEntities`;

    return this.httpService.get(`${this.path}`).pipe(
      switchMap((response: any) => {
        return of(response.data);
      })
    );
  }

  getAllContries(): Observable<any> {

    this.path = `${this.host_common}/MS_BoACommonParametrics/GetAllContries`;

    return this.httpService.get(`${this.path}`).pipe(
      switchMap((response: any) => {
        return of(response.data);
      })
    );
  }

  getAllAtoCategories(): Observable<any> {

    this.path = `${this.host_parametrics}/AtoServices/MS_Parametrics/GetAllAtoCategories`;

    return this.httpService.get(`${this.path}`).pipe(
      switchMap((response: any) => {
        return of(response.data);
      })
    );
  }


  getAllAirports(): Observable<any> {

    this.path = `${this.host_common}/MS_BoACommonParametrics/GetAllAirports`;

    return this.httpService.get(`${this.path}`).pipe(
      switchMap((response: any) => {
        return of(response.data);
      })
    );
  }

  getRateLanding(): Observable<any> {

    this.path = `${this.host_parametrics}/AtoServices/MS_Parametrics/GetAllRateLanding`;

    return this.httpService.get(`${this.path}`).pipe(
      switchMap((response: any) => {
        return of(response.data);
      })
    );
  }

  createRateLanding(rateLanding: any): Observable<any>
  {
    this.path = `${this.host_parametrics}/AtoServices/MS_Parametrics/CreateRateLanding`;
    return this.httpService.post(`${this.path}`, {
      id : 0,
      startDate_yyyyMMdd : rateLanding.startDate_yyyyMMdd,
      endDate_yyyyMMdd : rateLanding.endDate_yyyyMMdd,

      paisId : rateLanding.paisId,
      entidadId : rateLanding.entidadId,
      categoriaAtoId : rateLanding.categoriaAtoId,
      servicio : rateLanding.servicio,
      tipoTrafico : rateLanding.tipoTrafico,
      pesoMinimo : rateLanding.pesoMinimo,
      pesoMaximo : rateLanding.pesoMaximo,
      tarifa : rateLanding.tarifa,
      monedaId : rateLanding.monedaId
    }, this.requestConfig ).pipe(
      switchMap((response: any) => {
        // Return a new observable with the response
        return of(response.data);
      })
    );
  }

  updateRateLanding(rateLanding: any): Observable<any>
  {
    this.path = `${this.host_parametrics}/AtoServices/MS_Parametrics/UpdateRateLanding`;
    return this.httpService.put(`${this.path}`, {
      id : rateLanding.id,
      startDate_yyyyMMdd : rateLanding.startDate_yyyyMMdd,
      endDate_yyyyMMdd : rateLanding.endDate_yyyyMMdd,

      paisId : rateLanding.paisId,
      entidadId : rateLanding.entidadId,
      categoriaAtoId : rateLanding.categoriaAtoId,
      servicio : rateLanding.servicio,
      tipoTrafico : rateLanding.tipoTrafico,
      pesoMinimo : rateLanding.pesoMinimo,
      pesoMaximo : rateLanding.pesoMaximo,
      tarifa : rateLanding.tarifa,
      monedaId : rateLanding.monedaId
    }, this.requestConfig ).pipe(
      switchMap((response: any) => {
        // Return a new observable with the response
        return of(response.data);
      })
    );
  }

  deleteRateLanding(id:number): Observable<any>
  {
    this.path = `${this.host_parametrics}/AtoServices/MS_Parametrics/DeleteRateLanding/${id}`;
    return this.httpService.delete(`${this.path}`, this.requestConfig ).pipe(
      switchMap((response: any) => {
        // Return a new observable with the response
        return of(response.data);
      })
    );
  }
}
