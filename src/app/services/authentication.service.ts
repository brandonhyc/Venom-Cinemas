import { Injectable } from '@angular/core';
import { UserAccount } from '../shared/models/userAccount';
import { ApiService } from './api.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtService } from './jwt.service';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserLogin } from '../shared/models/userLogin';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: UserAccount;
  constructor(private apiService: ApiService,
              private jwtService: JwtService, 
              private jwtHelperService: JwtHelperService) { }

  login(userLogin: UserLogin): Observable<boolean> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    return this.apiService.create('/token', userLogin, options)
            .pipe(
              map(response => {
                if (response) {
                  this.jwtService.saveToken(response);
                  return true;
                } else return false;
              })
            );
  }

  logout() {
    this.jwtService.destroyToken();
  }

  decodeToken(): UserAccount {
    const token = this.jwtService.getToken();
    if (!token) {
      return null;
    } 
    const decodeToken = this.jwtHelperService.decodeToken(token);
    this.user = decodeToken;

    return this.user;
  }

  get getCurrentUserFullName(): string {
    if (this.decodeToken() != null) {
      const decodedResponse = this.decodeToken();
      const fullname = decodedResponse.firstName + ',' + decodedResponse.lastName;
      return fullname;
    }
  }

  get isAdmin() {
    if (this.decodeToken() != null) {
      const roles = this.decodeToken().role;
      if (roles) {
        return roles.includes('Admin');
      }
    }
  }
}
