import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable, retry } from "rxjs";
import { LoadingService } from "../services/loading/loading.service";

/**
 * Keep update the loading progress-bar in the AppComponent
 */
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(
    private _loadingService: LoadingService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loadingService.showLoading();

    return next.handle(request).pipe(
      retry(1),
      finalize(() => this._loadingService.hideLoading())
    );
  }
}
