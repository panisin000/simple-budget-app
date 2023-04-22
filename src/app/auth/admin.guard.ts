import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

//if want to open requirement-approval => next
// next ?
//user.role === 'A' => true => next ได้ไปต่อ requirement-approval
//user.role != 'A' rounting next แต่กลับ /auth/login

//function same
export const adminGuard = (next: ActivatedRouteSnapshot) => {
  const loggedInUser = inject(AuthService).getLoggedInUser();
  return loggedInUser?.user.role === 'A'
    ? true
    : createUrlTreeFromSnapshot(next, ['/auth', 'login']);
};
//function same
export function notLoggedGuard(next: ActivatedRouteSnapshot) {
  const loggedInUser = inject(AuthService).getLoggedInUser();
  return loggedInUser
    ? createUrlTreeFromSnapshot(next, ['/requirement-list'])
    : true;
};