import {NgModule} from "@angular/core";
import {AuthService} from "./services/auth.service";
import {JwtService} from "./services/jwt.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpTokenInterceptor} from "./intercentors/http-token.interceptor";

@NgModule({
  providers: [
    AuthService,
    JwtService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }
  ]
})
export class CoreModule {}
