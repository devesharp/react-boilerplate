import { HttpService, Resolve } from '@devesharp/react-utils';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class ApiManager {
   host?: string;

   login<T = any>(login: string, password: string): Observable<T> {
      return this.post<T>(`/auth`, {
         login,
         password,
      });
   }

   private post<T = any>(path: string, body: any): Observable<T> {
      return HttpService.post(this.host + path, body).pipe(map((r: any) => r.data));
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
