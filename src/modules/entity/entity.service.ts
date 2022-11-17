import { Injectable } from '@nestjs/common';

import { Observable, of } from "rxjs";
import { switchMap, map } from "rxjs/operators";
import { HttpService } from '@nestjs/axios';

import { AxiosRequestConfig } from 'axios';

@Injectable()
export class EntityService {

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

    getAllContries(): Observable<any> {
        this.path = `${this.host_common}/MS_BoACommonParametrics/GetAllContries`;
        //return this.httpService.get('http://172.17.58.51/MS_BoACommonParametrics/GetAllContries').pipe(
        return this.httpService.get(`${this.path}`).pipe(
            switchMap((response: any) => {
                return of(response.data);
            })
        );
    }

    getAllEntities(): Observable<any> {
        this.path = `${this.host_parametrics}/AtoServices/MS_Parametrics/GetAllEntities`;
        //return this.httpService.get('http://172.17.59.75/AtoServices/MS_Parametrics/GetAllEntities').pipe(
        return this.httpService.get(`${this.path}`).pipe(
            switchMap((response: any) => {
                return of(response.data);
            })
        );
    }


    createEntity(entity: any): Observable<any>
    {
        this.path = `${this.host_parametrics}/AtoServices/MS_Parametrics/CreateEntity`;
        return this.httpService.post(`${this.path}`, {
        //return this.httpService.post('http://172.17.59.75/AtoServices/MS_Parametrics/CreateEntity', {
            id : 0,
            countryId : entity.countryId,
            entityName : entity.entityName
        }, this.requestConfig ).pipe(
            switchMap((response: any) => {
                // Return a new observable with the response
                return of(response.data);
            })
        );
    }

    updateEntity(entity: any): Observable<any>
    {
        this.path = `${this.host_parametrics}/AtoServices/MS_Parametrics/UpdateEntity`;
        return this.httpService.put(`${this.path}`, {
        //return this.httpService.put('http://172.17.59.75/AtoServices/MS_Parametrics/UpdateEntity', {
            id : entity.id,
            countryId : entity.countryId,
            entityName : entity.entityName
        }, this.requestConfig ).pipe(
            switchMap((response: any) => {
                // Return a new observable with the response
                return of(response.data);
            })
        );
    }

    deleteEntity(id:number): Observable<any>
    {
        //this.path = `http://172.17.59.75/AtoServices/MS_Parametrics/DeleteEntity/${idEntity}`;
        this.path = `${this.host_parametrics}/AtoServices/MS_Parametrics/DeleteEntity/${id}`;
        return this.httpService.delete(`${this.path}`, this.requestConfig ).pipe(
            switchMap((response: any) => {
                // Return a new observable with the response
                return of(response.data);
            })
        );
    }

}
