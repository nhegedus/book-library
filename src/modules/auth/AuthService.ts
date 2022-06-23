import ApiService from "@/shared/services/ApiService";
import type { IAuthData } from "./Auth.types";

export class AuthService {
  public static login(authData: IAuthData): Promise<IAuthData> {
    return new Promise((resolve, reject) => {
      ApiService.post("/login", { data: authData })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  }
}
