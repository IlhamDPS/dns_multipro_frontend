import { http } from "../utils/http";

const url= {
  baseAuthentication: () => `/auth/login`,
};

const hooks = {

};

const api = {
  login: (data: any) => {
    return http.post(url.baseAuthentication(), data, null);
  },
};

export const AuthenticationRepository = {
  url,
  hooks,
  api,
};
