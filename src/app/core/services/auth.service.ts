import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

import {User} from "../models/user.model";
import {AuthResponse} from "../models/auth-response.model";
import {JwtService} from "./jwt.service";

@Injectable()
export class AuthService {

  private authenticated = false

  constructor(private http: HttpClient,
              private jwt: JwtService) {

    this.jwt.killToken.subscribe(() => {
      this.authenticated = false
      console.log('Token was killed')
    })
  }

  isAuthenticated(): boolean {
    return this.authenticated
  }

  login(user: User) {
    return this.http.post<any>('api/login', user)
  }

  register(user: User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('api/register', user).pipe(
      tap(response => {
        this.authenticated = true
        this.jwt.saveAccessToken(response.tokens.acessToken)
        this.jwt.saveRefreshToken(response.tokens.acessToken)
        this.jwt.setTimeLifeToken(response.tokens.exparedAt)
      })
    )
  }
}
