import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from '../Model/menu-item.model';
import { OutlineButtonComponent } from '../outline-button/outline-button.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    OutlineButtonComponent,
    HeaderMenuComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuItems = [
    {
      text: 'Free Landing Pages',
      route: '/landing' 
    },
    {
      text: 'Features',
      route: ''
    },
    {
      text:'Service',
      route: ''
    },
    {
      text:'Pricing',
      route:'/pricing'
    },
    {
      text:'Contact',
      route:'/contact'
    }
    
  ]
}
