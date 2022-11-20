/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class requestInterceptor implements HttpInterceptor{

    constructor(){}

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const Token = localStorage.getItem('token');

        // eslint-disable-next-line no-extra-boolean-cast
        if(!!Token) {
            req = req.clone({
                setHeaders: {
                    'authorization': `Bearer ${Token}`
                }
            });
        }

        return next.handle(req);
    }

}
