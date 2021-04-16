import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userName: string;
  public password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  login(formVals): void {
    console.log(formVals);
    this.authService.loginUser(formVals.userName, formVals.password);
    this.router.navigate(['events']);
  }

  cancel(): void {
    this.router.navigate(['events']);
  }
}
