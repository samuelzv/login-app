export function login(app, router) {
  if(!app) {
    throw new Error('Error:Cannot get app');
  }
  router.post('/login', authenticate);
}

function* authenticate(next) {
  let params = this.request.body;

  if(isValidUser(params.username, params.password)) {
    this.body = 'Login successful'
  } else {
    this.throw('Bad credentials', 500);
  }

  yield next;
}

function isValidUser(username, password) {
  return username == 'demo' && password == '123';
}
