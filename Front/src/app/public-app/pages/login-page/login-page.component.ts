import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'front-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor(private auths: AuthService, private router: Router) { }
  userAdmin() {
    this.auths.administrador = true;
    this.router.navigate(['/home']);
  }
  userNoAdmin() {
    this.auths.administrador =false;
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
  }

}
