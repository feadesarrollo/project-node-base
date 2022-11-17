import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';
import { HttpService } from '@nestjs/axios';

import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

@Injectable()
export class RateParkingService {
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

  getAllRateLanding(): Observable<any> {

    this.path = `${this.host_parametrics}/AtoServices/MS_Parametrics/GetAllRateLanding`;

    return this.httpService.get(`${this.path}`).pipe(
      switchMap((response: any) => {
        return of(response.data);
      })
    );
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

  getRateParking(): Observable<any> {

    this.path = `${this.host_parametrics}/AtoServices/MS_Parametrics/GetAllRateParking`;

    return this.httpService.get(`${this.path}`).pipe(
      switchMap((response: any) => {
        return of(response.data);
      })
    );
  }

  createRateParking(rateParking: any): Observable<any>
  {
    this.path = `${this.host_parametrics}/AtoServices/MS_Parametrics/CreateRateParking`;
    return this.httpService.post(`${this.path}`, {
      id : 0,
      startDate_yyyyMMdd : rateParking.startDate_yyyyMMdd,
      endDate_yyyyMMdd : rateParking.endDate_yyyyMMdd,

      minSinCosto : rateParking.minSinCosto,
      hrsEstacionamiento : rateParking.hrsEstacionamiento,
      tarifaAterrizajeId : rateParking.tarifaAterrizajeId,
      porcentaje : rateParking.porcentaje,
      fromula : rateParking.fromula
    }, this.requestConfig ).pipe(
      switchMap((response: any) => {
        // Return a new observable with the response
        return of(response.data);
      })
    );
  }

  updateRateParking(rateParking: any): Observable<any>
  {
    this.path = `${this.host_parametrics}/AtoServices/MS_Parametrics/UpdateRateParking`;
    return this.httpService.put(`${this.path}`, {
      id : rateParking.id,
      startDate_yyyyMMdd : rateParking.startDate_yyyyMMdd,
      endDate_yyyyMMdd : rateParking.endDate_yyyyMMdd,

      minSinCosto : rateParking.minSinCosto,
      hrsEstacionamiento : rateParking.hrsEstacionamiento,
      tarifaAterrizajeId : rateParking.tarifaAterrizajeId,
      porcentaje : rateParking.porcentaje,
      fromula : rateParking.fromula
    }, this.requestConfig ).pipe(
      switchMap((response: any) => {
        // Return a new observable with the response
        return of(response.data);
      })
    );
  }

  deleteRateParking(id:number): Observable<any>
  {
    this.path = `${this.host_parametrics}/AtoServices/MS_Parametrics/DeleteRateParking/${id}`;
    return this.httpService.delete(`${this.path}`, this.requestConfig ).pipe(
      switchMap((response: any) => {
        // Return a new observable with the response
        return of(response.data);
      })
    );
  }
}
