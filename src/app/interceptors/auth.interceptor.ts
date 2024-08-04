import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token') ?? '';
  let request = req.clone({
    setHeaders: {
      Authorization: token ? `Token ${token}` : '',
    }
  });

  return next(request);
};
