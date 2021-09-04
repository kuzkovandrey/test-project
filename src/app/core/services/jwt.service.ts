import {Injectable} from "@angular/core";

import {RefreshTokenService} from "./refresh-token.service";
import {AuthResponse} from "../models/auth-response.model";
import {CookieOptions} from "../models/cookie-options.model";
import {TokenHandler} from "../models/token-handler.model";

@Injectable()
export class JwtService {

  constructor(private refreshTokenService: RefreshTokenService) {}

  setToken(name: string, value: string, options: CookieOptions = {path: '/', 'max-age': 36000}): void {
    const updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path="/"; max-age=${options['max-age']}`

    console.log(updatedCookie)

    document.cookie = updatedCookie;
  }

  setAllTokens(tokens: TokenHandler): void {
    this.setToken('jwtAccessToken', tokens.acessToken, {'max-age': tokens.exparedAt})

    this.setToken('jwtRefreshToken', tokens.refreshToken)
  }

  getToken(name: string): string {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));

    return matches ? decodeURIComponent(matches[1]) : '';
  }

  refreshToken(): void {
    const refToken = this.getToken('jwtRefreshToken')

    this.refreshTokenService.refresh(refToken).subscribe(
      (newToken: AuthResponse) => {

        this.setAllTokens(newToken.tokens)

        console.log('[jwt-service]: REFRESH: ', newToken.tokens.acessToken)

      },
      error => {
        console.log('[jwt-service]: Error refresh token')
      }
    )
  }
}
