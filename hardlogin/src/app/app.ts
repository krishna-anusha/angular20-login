import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Master } from './services/master';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hardlogin');
  loggedUserName:string='';
  
  constructor(private masterService:Master){
    this.readLoggedData();
    this.masterService.onLogin.subscribe(res=>{
      this.readLoggedData()
    });
    
    
  }
  readLoggedData(){
    const loggedData=localStorage.getItem("angular20user");
    if(loggedData!=null)
    {
      this.loggedUserName=loggedData
    }
  }
  onLogOff(){
    localStorage.removeItem("angular20user");
    this.readLoggedData();
    this.loggedUserName='';
   
  }
}
