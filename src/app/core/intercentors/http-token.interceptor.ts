import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtService} from "../services/jwt.service";

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor{

  constructor(private jwt: JwtService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': '',
      'refreshToken': ''
    };

    const token = this.jwt.getToken('jwtAccessToken')

    if (token) headersConfig['Authorization'] = token;

    const request = req.clone({setHeaders: headersConfig});

    if (req.url === 'api/refresh') {
      const refToken = this.jwt.getToken('jwtRefreshToken')

      const request = req.clone({setParams: {refreshToken: refToken}});

      console.log('[http-token-interceptor: REFRESH]', request)

      return next.handle(request)
    }

    return next.handle(request);
  }
}
