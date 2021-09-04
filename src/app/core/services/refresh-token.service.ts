import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthResponse} from "../models/auth-response.model";

@Injectable()
export class RefreshTokenService {
  constructor(private http: HttpClient) {}

  refresh(refToken: string) {
    return this.http.get<AuthResponse>('api/refresh')
  }

}
