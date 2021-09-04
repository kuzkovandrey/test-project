import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtService} from "../services/jwt.service";

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor{

  constructor(private jwtService: JwtService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': '',
      'refreshToken': ''
    };

    const token = this.jwtService.getAccessToken();

    if (token) {
      headersConfig['Authorization'] = token;
    }

    const request = req.clone({setHeaders: headersConfig});

    if (req.url === 'api/refresh') {
      const refToken = this.jwtService.getRefreshToken()

      const request = req.clone({setParams: {refreshToken: refToken}});

      console.log('[REFRESH TOKEN]', request)

      return next.handle(request)
    }

    return next.handle(request);
  }
}
