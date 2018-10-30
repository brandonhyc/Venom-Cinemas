import { Component, OnInit } from '@angular/core';
import { UserAccount } from '../shared/models/userAccount';
import { UserLogin } from 'src/app/shared/models/userLogin';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean;
  returnUrl: string;
  user: UserAccount;
  userLogin: UserLogin = { 
    username: '',
    password: ''
  };

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  login() {
    this.authenticationService.login(this.userLogin).subscribe(
      response => {
        if (response) {
          console.log(response);
        } else {
          console.log("error " + response);
        }
      }
    )
  }

}
