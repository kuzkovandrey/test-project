import {TokenHandler} from "./token-handler.model";

export interface AuthResponse {
  username: string
  tokens: TokenHandler
}
