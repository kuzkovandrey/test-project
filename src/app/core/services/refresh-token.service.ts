import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {AuthResponse} from "../models/auth-response.model";

@Injectable()
export class RefreshTokenService {

  constructor(private http: HttpClient) {}

  refresh(refToken: string): Observable<AuthResponse> {
    return this.http.get<AuthResponse>('api/refresh')
  }
}
