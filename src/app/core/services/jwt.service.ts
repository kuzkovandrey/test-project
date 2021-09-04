import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";
import {RefreshTokenService} from "./refresh-token.service";
import {AuthResponse} from "../models/auth-response.model";

@Injectable()
export class JwtService {

  killToken: Subject<boolean> = new Subject<boolean>()

  constructor(private refreshTokenService: RefreshTokenService) {}

  getAccessToken(): string {
    return window.localStorage['jwtAccessToken']
  }

  saveAccessToken(token: string): void {
    window.localStorage['jwtAccessToken'] = token
  }

  destroyAccessToken(): void {
    window.localStorage.removeItem('jwtAccessToken');
    //this.killToken.next(true)
  }

  getRefreshToken(): string {
    return window.localStorage['jwtRefreshToken']
  }

  saveRefreshToken(token: string): void {
    window.localStorage['jwtRefreshToken'] = token
  }

  destroyRefreshToken(): void {
    window.localStorage.removeItem('jwtRefreshToken');
  }

  refreshToken() {
    const refToken = this.getRefreshToken()

    this.refreshTokenService.refresh(refToken).subscribe(
      (newToken:AuthResponse) => {
        this.saveAccessToken(newToken.tokens.acessToken)
        this.saveRefreshToken(newToken.tokens.refreshToken)
        this.setTimeLifeToken(newToken.tokens.exparedAt)
      },
      error => {
        console.log('Error refresh token')
      }
    )
  }

  setTimeLifeToken(time: number) {
    console.log('start TimeLifeToken')

    setTimeout(() => {

      this.destroyAccessToken()
      this.refreshToken()

    }, time * 1000)
  }
}