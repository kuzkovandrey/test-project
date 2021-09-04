import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

import {User} from "../models/user.model";
import {AuthResponse} from "../models/auth-response.model";
import {JwtService} from "./jwt.service";

@Injectable()
export class AuthService {

  authenticated = false
  authorized = false

  constructor(private http: HttpClient,
              private jwt: JwtService) {}

  isAuthenticated(): boolean {
    return this.authenticated
  }

  isAuthorized(): boolean {
    return this.authorized
  }

  login(user: User) {
    return this.http.post<any>('api/login', user)
  }

  register(user: User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('api/register', user).pipe(
      tap(response => {
        this.authenticated = true
        this.jwt.saveAccessToken(response.tokens.acessToken)
        this.jwt.saveRefreshToken(response.tokens.refreshToken)
        //this.jwt.setTimeLifeToken(response.tokens.exparedAt)
      })
    )
  }
}
