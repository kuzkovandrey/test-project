import {NgModule} from "@angular/core";
import {AuthService} from "./services/auth.service";
import {JwtService} from "./services/jwt.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpTokenInterceptor} from "./intercentors/http-token.interceptor";
import {RefreshTokenService} from "./services/refresh-token.service";
import {AuthGuard} from "./guards/auth.guard";

@NgModule({
  providers: [
    AuthService,
    JwtService,
    RefreshTokenService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }
  ]
})
export class CoreModule {}
