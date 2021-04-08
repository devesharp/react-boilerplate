import { HttpService, Resolve } from '@devesharp/react-utils';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const host = 'http://localhost:8000/api';

export class ApiManager {
   login<T = any>(params: { login: string; password: string }): Observable<T> {
      return ApiManager.post<T>(`/auth/login`, params);
   }

   static post<T = any>(path: string, body: any): Observable<T> {
      return HttpService.post(host + path, body).pipe(map((r: any) => r.data));
   }

   // get<Response = any>(path: string): IResolveGet<Response> {
   //    return (id: string | number) => HttpService.get(this.host + path).pipe(map((r: any) => r.data));
   // }
   //
   // create<Response = any, Body = any>(path: string): IResolveCreate<Response> {
   //    return (body: Body) => HttpService.post(this.host + path, body).pipe(map((r: any) => r.data));
   // }
   //
   // update<Response = any, Body = any>(path: string): IResolveUpdate<Response> {
   //    return (id: string | number, body: Body) =>
   //       HttpService.post(this.host + path, body).pipe(map((r: any) => r.data));
   // }
   //
   // delete<Response = any, Body = any>(path: string): IResolveUpdate<Response> {
   //    return (id: string | number, body: Body) =>
   //       HttpService.delete(this.host + path, body).pipe(map((r: any) => r.data));
   // }
}

export const API = new ApiManager();
