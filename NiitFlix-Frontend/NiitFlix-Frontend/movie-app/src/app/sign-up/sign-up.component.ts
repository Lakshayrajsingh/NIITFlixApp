import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  message: string = "Thank-you for your Registration"
  success: string = "successful";

  failure: string = "Sorry"
  message2: string = "Email already registered with us try login"

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private registration: RegistrationService, private route: Router) { }
  ngOnInit(): void {
  }
  userDetails = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z]{0,}")]],
    emailId: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    mobileNo: ['', [Validators.required, Validators.pattern(/^[789]\d{9,9}$/)]],
    address: ['', [Validators.required]]
  })

  // checkPassword(fc:AbstractControl):ValidationErrors|null{
  //   var password1=fc.get('password')?.value;
  //   var confirmPassword=fc.get('cPassword')?.value;
  //   if(confirmPassword==""){
  //     return {passwordmatch1:false}
  //   }
  //   else if(password1!=confirmPassword){
  //     return {passwordmatch2:false};
  //   }
  //   return null;
  // }

  get userName() { return this.userDetails.get("userName") }
  get emailId() { return this.userDetails.get("emailId") }
  get password() { return this.userDetails.get("password") }
  get mobileNo() { return this.userDetails.get("mobileNo") }
  get address() {
    return this.userDetails.get("address")
  }
  openSnackBar(message: string, action: string) {
    console.log(this.userDetails);
    // this.addingRegistration.emit(this.userDetails.value);
    this.registration.addReg(this.userDetails.value).subscribe(
      () => { alert("Registration is Inserted"), this._snackBar.open(message, action) },
      (err: Error) => { alert("User Already Exists in Database"); this._snackBar.open(this.message2, this.failure), console.log(err.message) }
    );
    this.route.navigateByUrl("/login");
  }

  editStatus: any
  canDeActivate() {
    if (!this.editStatus) {
      let response = confirm(
        'Changes are not saved. Do you still want to Leave?'
      );
      return response;
    } else return true;
  }
}
