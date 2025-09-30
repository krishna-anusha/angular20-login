import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Master } from '../../services/master';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginObj:any={
    userName:'',
    password:''
  }
  masterService=inject(Master);
  router=inject(Router);
  onLogin(){
    if(this.loginObj.userName=='admin' && this.loginObj.password=='112233')
    {
      this.router.navigateByUrl('/admin');
      localStorage.setItem('angular20user',"admin");
      this.masterService.onLogin.next(true)
    }
    else
    {
      alert("wrong credentials")
    }
  }
  
}
