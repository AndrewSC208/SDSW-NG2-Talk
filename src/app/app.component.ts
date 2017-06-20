import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SDSW Demo';

  links = [
  	{
  		title: 'Home',
  		description: 'We all have one',
  		icon: 'home',
  		href: '/home'
  	},
    {
      title: 'Goals',
      description: 'Sure',
      icon: 'trending_up',
      href: '/goals'
    }
  ];
  
}
