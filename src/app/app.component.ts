import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from './shared/services/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading: Observable<boolean> = this._loadingService.isLoading();

  constructor(
    private _loadingService: LoadingService
  ) { }
}
