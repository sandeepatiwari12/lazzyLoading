import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from '../../shared/services/auth.service';

@Injectable()
export class NavService {

    options;
    domain = this.authService.domain;

    constructor(
        private http: Http,
        private authService: AuthService,
    ) { }

  createAuthenticationHeaders() {
    this.authService.loadToken();
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.authService.authToken // Attach token
      })
    });
  }
    getNavbarData() {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + 'api/navbarData', this.options)
            .map(res => res.json());
    }
}
