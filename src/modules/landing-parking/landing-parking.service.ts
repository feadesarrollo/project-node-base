import { Injectable } from '@nestjs/common';

import { AxiosRequestConfig } from 'axios';
import { HttpService } from '@nestjs/axios';
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";

@Injectable()
export class LandingParkingService {

  private path: string;
  private pathLanding: string;
  constructor(
    private readonly httpService: HttpService
  ) {
    this.pathLanding = process.env.HOST_LANDING;
  }

  getLandingData(filter): Observable<any> {
    const query = new URLSearchParams(filter).toString();
    this.path = `${this.pathLanding}/AtoServices/MS_LandingParking/GetLandingData?${query}`;

    return this.httpService.get(`${this.path}`).pipe(
      switchMap((response: any) => {
        return of(response.data);
      })
    );

  }

  getLandingFee(filter): Observable<any> {
    const query = new URLSearchParams(filter).toString();
    this.path = `${this.pathLanding}/AtoServices/MS_LandingParking/GetLandingFee?${query}`;

    return this.httpService.get(`${this.path}`).pipe(
      switchMap((response: any) => {
        return of(response.data);
      })
    );
  }

  getParkingData(filter): Observable<any> {
    const query = new URLSearchParams(filter).toString();
    this.path = `${this.pathLanding}/AtoServices/MS_LandingParking/GetParkingData?${query}`;

    return this.httpService.get(`${this.path}`).pipe(
      switchMap((response: any) => {
        return of(response.data);
      })
    );
  }

}
