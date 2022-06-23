/* eslint @typescript-eslint/no-var-requires: "off" */
import type { IAuthData } from "@/modules/auth/Auth.types";
import { AuthService } from "@/modules/auth/AuthService";
import JwtService from "@/shared/services/JwtService";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";

export interface IAuthState {
  authUser: IAuthData;
  error: Error | null;
  loading: boolean;
}

@Module({ namespaced: true, stateFactory: true })
export default class AuthStore extends VuexModule implements IAuthState {
  authUser: IAuthData = {
    email: "",
    password: "",
    token: JwtService.getToken(),
  };

  error: Error | null = null;
  loading = false;

  get isAuthenticated(): boolean {
    return !!this.authUser.token;
  }

  @Mutation
  setAuth(auth: IAuthData) {
    this.authUser.email = auth.email;
    this.authUser.password = auth.password;
    this.authUser.token = auth.token;
  }

  @Mutation
  resetAuthData() {
    this.authUser.email = "";
    this.authUser.password = "";
    this.authUser.token = "";
  }

  @Mutation
  setError(error: Error | null) {
    this.error = error;
  }

  @Mutation
  setLoading(loading: boolean) {
    this.loading = loading;
  }

  @Action({ rawError: true })
  async verifyAuth(): Promise<void> {}

  @Action({ rawError: true })
  login(authData: IAuthData): Promise<void> {
    return new Promise((resolve, reject) => {
      AuthService.login(authData)
        .then((data) => {
          if (data.token) {
            this.context.commit("setAuth", data);
            JwtService.saveToken(data.token);
            resolve();
          } else {
            reject();
          }
        })
        .catch((error) => {
          console.log(error);
          reject();
        });
    });
  }

  @Action({ rawError: true })
  async logout(): Promise<void> {
    return new Promise((resolve) => {
      JwtService.destroyToken();
      this.context.commit("resetAuthData");
      resolve();
    });
  }
}
