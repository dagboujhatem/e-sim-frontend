import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EsimFront';
  actions=[
    {route:'/home',title:'Home',icon:'house'},
    {route:'/gpt',title:'ChatGPT',icon:'chat'}
  ]
  currentAction :any;
  constructor(private router: Router){}
  handleRoute(action:any){
    this.currentAction+action ;
    this.router.navigateByUrl(action.route);
  }
}
