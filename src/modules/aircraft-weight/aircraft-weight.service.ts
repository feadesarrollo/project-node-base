import { Injectable } from '@nestjs/common';

import { AxiosRequestConfig } from 'axios';
import { HttpService } from '@nestjs/axios';

import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

@Injectable()
export class AircraftWeightService {
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

  getAllAircraft(): Observable<any> {

    this.path = `${this.host_common}/MS_BoACommonParametrics/GetAllAircrafts`;

    return this.httpService.get(`${this.path}`).pipe(
      switchMap((response: any) => {
        return of(response.data);
      })
    );
  }

  getAircraftWeight(): Observable<any> {

    this.path = `${this.host_parametrics}/AtoServices/MS_Parametrics/GetAllAircraftWeight`;

    return this.httpService.get(`${this.path}`).pipe(
      switchMap((response: any) => {
        return of(response.data);
      })
    );
  }

  createAircraftWeight(aw: any): Observable<any>
  {
    this.path = `${this.host_parametrics}/AtoServices/MS_Parametrics/CreateAircraftWeight`;
    return this.httpService.post(`${this.path}`, {
      id : 0,
      startDate_yyyyMMdd : aw.startDate_yyyyMMdd,
      endDate_yyyyMMdd : aw.endDate_yyyyMMdd,
      aeronaveId : aw.aeronaveId,
      mtow : aw.mtow,
      estado : 1,
      usrRegistro : 'ESPINOZA ALVAREZ FRANKLIN'
    }, this.requestConfig ).pipe(
      switchMap((response: any) => {
        // Return a new observable with the response
        return of(response.data);
      })
    );
  }

  updateAircraftWeight(aw: any): Observable<any>
  {
    this.path = `${this.host_parametrics}/AtoServices/MS_Parametrics/UpdateAircraftWeight`;
    return this.httpService.put(`${this.path}`, {
      id : aw.id,
      startDate_yyyyMMdd : aw.startDate_yyyyMMdd,
      endDate_yyyyMMdd : aw.endDate_yyyyMMdd,
      aeronaveId : aw.aeronaveId,
      mtow : aw.mtow,
      estado : 1,
      usrRegistro : 'ESPINOZA ALVAREZ FRANKLIN'
    }, this.requestConfig ).pipe(
      switchMap((response: any) => {
        // Return a new observable with the response
        return of(response.data);
      })
    );
  }

  deleteAircraftWeight(id:number): Observable<any>
  {
    this.path = `${this.host_parametrics}/AtoServices/MS_Parametrics/DeleteAircraftWeight/${id}`;
    return this.httpService.delete(`${this.path}`, this.requestConfig ).pipe(
      switchMap((response: any) => {
        // Return a new observable with the response
        return of(response.data);
      })
    );
  }

}
