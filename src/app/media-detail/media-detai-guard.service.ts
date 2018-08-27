import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterModule, Router} from '@angular/router';

@Injectable()
export class MediaDetaiGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
      let id = +route.url[1].path;
      if (isNaN(id) || id < 1 ) {
        alert('Wrong Param Search') ;
        this.router.navigate(['/search']);
        return false;
      }
      return true;
  }
}
