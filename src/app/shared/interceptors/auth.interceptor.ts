import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

/**
 * Inject API Token for Finnhub API in the query params of each http request
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private _apiTokenSuffix = '&token=casmgtaad3i6329ske70';

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const dupReq = request.clone({ url: request.url + this._apiTokenSuffix });

    return next.handle(dupReq);
  }
}
