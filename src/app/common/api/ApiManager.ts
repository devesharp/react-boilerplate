import { HttpService, Resolve } from '@devesharp/react-utils';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '~/environments/environment';

console.log(environment);

export class ApiManager {
   login<T = any>(params: { login: string; password: string }): Observable<T> {
      return ApiManager.post<T>(`/auth/login`, params);
   }

   checkToken<T = any>(params: any): Observable<T> {
      return ApiManager.get<T>(`/auth/me`);
   }

   static post<T = any>(path: string, body: any): Observable<T> {
      return HttpService.post(environment.API + path, body).pipe(map((r: any) => r.data));
   }

   static get<T = any>(path: string): Observable<T> {
      return HttpService.get(environment.API + path).pipe(map((r: any) => r.data));
   }
}

export const API = new ApiManager();
