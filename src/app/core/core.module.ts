import {NgModule} from "@angular/core";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

import {AuthService} from "./services/auth.service";
import {JwtService} from "./services/jwt.service";
import {RefreshTokenService} from "./services/refresh-token.service";
import {HttpTokenInterceptor} from "./intercentors/http-token.interceptor";
import {NotAuthGuard} from "./guards/not-auth.guard";

@NgModule({
  providers: [
    AuthService,
    JwtService,
    RefreshTokenService,
    NotAuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }
  ]
})
export class CoreModule {}
