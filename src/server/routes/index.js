import {login} from './login';

export function routes(app, router) {
  login(app, router);
}