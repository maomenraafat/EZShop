import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const _toastrService = inject(ToastrService);

  return next(req).pipe(
    catchError((error) => {
      console.error('Error fetching products', error);
      _toastrService.error('Failed to fetch Data', 'EZShop');
      return throwError(() => new Error('Failed to fetch products'));
    })
  );
};
