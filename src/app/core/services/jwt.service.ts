import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable()
export class JwtService {

  killToken: Subject<boolean> = new Subject<boolean>()

  getAccessToken(): string {
    return window.localStorage['jwtAccessToken']
  }

  saveAccessToken(token: string): void {
    window.localStorage['jwtAccessToken'] = token
  }

  destroyAccessToken(): void {
    window.localStorage.removeItem('jwtAccessToken');
    this.killToken.next(true)
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

  setTimeLifeToken(time: number) {
    console.log('start TimeLifeToken')

    setTimeout(() => {

      this.destroyAccessToken()
    }, time * 1000)
  }
}
