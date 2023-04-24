import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // failure:string="Sorry"
  // message2:string="Email not registered with us try login"

  // loginform=this.fb.group({
  //   email:['', [Validators.required]],
  //   password:['', [Validators.required]]});

  //   get email() { return this.loginform.get("email") }


    constructor(private userService:LoginServiceService , private router:Router,private fb:FormBuilder,private auth:AuthService,private _snackBar:MatSnackBar) { }

    ngOnInit(): void {
    }
  
    // loginform = new FormGroup({
    //   'emailId':new FormControl(),
    //   'password': new FormControl()
    // });
  
    loginform = this.fb.group({
      'emailId':new FormControl('',[Validators.required,Validators.email]),
      'password': new FormControl('',[Validators.required])
    });
  
  get emailId() { return this.loginform.get("emailId") }
  get password() { return this.loginform.get("password") }
  
    responseData:any;
    sendLoginData(){
      console.log(this.loginform.value);
      this.userService.loginCheck(this.loginform.value).subscribe(
        response=>{
          console.log(response);
          this.responseData=response;
          console.log(this.responseData.token);
          console.log(this.responseData.role);
          console.log(this.responseData.message);
          localStorage.setItem('jwt',this.responseData.token);
          // let token = localStorage.getItem('jwt')
          // console.log(token);
          localStorage.setItem("role",this.responseData.role);
          localStorage.setItem("email",this.responseData.email);
          // this.auth.isLoggedIn=true;
          this._snackBar.open('Logged in Successfully!!', 'success', {
            duration: 5000,
            panelClass: ['mat-toolbar', 'mat-primary']
          });
          // if(this.responseData.role=="ROLE_ADMIN"){
          //   this.router.navigateByUrl("/adminView");
          // }
          // else
          this.router.navigateByUrl("/userview");
        }
      )
      
    }
}
