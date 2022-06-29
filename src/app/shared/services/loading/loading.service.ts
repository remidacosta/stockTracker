import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _isLoading: Subject<boolean> = new Subject();
  private _nbLoadings: number = 0;

  isLoading(): Observable<boolean> {
    return this._isLoading.asObservable();
  }

  showLoading(): void {
    ++this._nbLoadings;
    if (this._nbLoadings === 1) {
      this._isLoading.next(true);
    }
  }

  hideLoading(): void {
    --this._nbLoadings;
    if (this._nbLoadings === 0) {
      this._isLoading.next(false);
    }
  }
}
