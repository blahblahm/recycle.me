import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isUser: boolean = false;
  isWorker: boolean = false;
  isAdmin : boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const isLoggedIn = this.authService.isLoggedIn();
    const userRole = this.authService.getUserRole();
    console.log('isLoggedIn:', isLoggedIn);
    console.log('userRole:', userRole);
  
    this.isUser = isLoggedIn && userRole === 'User'; 
    this.isWorker = isLoggedIn && userRole === 'Worker';
    this.isAdmin = isLoggedIn && userRole === 'Admin';

  
    // Define multiple state URLs using logical OR (||) operator
    const userRestrictedUrls = ['/admin', '/worker'];
    const adminRestrictedUrls = ['/news', '/profile', '/all_cupons', '/your_cupons', '/worker'];

    if (!isLoggedIn && adminRestrictedUrls) {
      this.router.navigate(['/login']);
      return false;

    } else if (this.isAdmin && adminRestrictedUrls.includes(state.url)) {
      this.router.navigate(['/login']);
      localStorage.removeItem('token');
      return false;

    } else if (this.isUser && userRestrictedUrls.includes(state.url)) {
      this.router.navigate(['/login']);
      localStorage.removeItem('token');
      return false;

    } else if (this.isWorker && state.url === '/admin') {
      this.router.navigate(['/login']);
      localStorage.removeItem('token');
      return false;
    }
    return true;
  }
}
