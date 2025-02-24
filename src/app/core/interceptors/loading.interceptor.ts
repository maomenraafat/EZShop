import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const _ngxSpinnerService = inject(NgxSpinnerService);

  _ngxSpinnerService.show();

  return next(req).pipe(
    finalize(() => {
      setTimeout(() => {
        _ngxSpinnerService.hide();
      }, 800);
    })
  );
};
