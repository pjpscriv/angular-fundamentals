import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './login/auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;
  public firstName: FormControl;
  public lastName: FormControl;

  constructor(
    private auth: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, [Validators.required]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  public saveProfile(formValues): void {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues);
      this.router.navigate(['events']);
    }
  }

  public cancel(): void {
    this.router.navigate(['events']);
  }

  public validateFirstName(): boolean {
    return this.firstName.invalid &&
           this.firstName.touched;
  }

  public validateLastName(): boolean {
    return this.lastName.invalid &&
           this.lastName.touched;
  }


}
