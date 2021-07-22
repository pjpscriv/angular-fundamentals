import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './login/auth.service';
import {Router} from '@angular/router';
import {Inject} from '@angular/core';
import {Toastr, TOASTR_TOKEN} from '../common/toastr.service';

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
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit(): void {
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, [Validators.required]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  public saveProfile(formValues): void {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues).subscribe(() => {
        this.toastr.success('Profile saved');
      });
    }
  }

  public cancel(): void {
    this.router.navigate(['events']);
  }

  public logout(): void {
    this.auth.logoutUser().subscribe(() => {
      this.router.navigate(['/user/login']);
    });
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
