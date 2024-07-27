import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  username:string = "";
  password:string ="";

  readonly http = inject(HttpClient);
  readonly router = inject(Router);

  onLogin(){
    console.log("hello");

    const loginData = {
      username: this.username,
      password: this.password
    };

    console.log(loginData);

    this.http.post("http://localhost:3000/login", loginData)
    .subscribe((res:any) => {
      if(res.result){
        console.log(res.data.token);
        localStorage.setItem('token',res.data.token);
        this.router.navigateByUrl('');
        var tokenCheck = localStorage.getItem('token');
        console.log("local storage", tokenCheck);
        console.log('success');
      } else {
        console.log("teste",res.result);
      }
    })
  }
}
