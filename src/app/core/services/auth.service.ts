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

  isAuthorized(): boolean {
    return this.authorized
  }

  login(user: User): Observable<AuthResponse> {
    //this.authorized = true
    return this.http.post<AuthResponse>('api/login', user)
  }

  register(user: User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('api/register', user).pipe(
      tap(response => {
        this.authenticated = true

        this.jwt.setAllTokens(response.tokens)
      })
    )
  }
}
