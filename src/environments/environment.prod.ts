const baseHostName = 'http://localhost:3000/api/'
export const environment = {
  production: true,
  book: baseHostName + 'books/',

  auth: {
    login: 'api/user/login',
    register: 'api/user/register',
  },
};