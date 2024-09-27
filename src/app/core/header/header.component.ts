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
  menuItems: MenuItem[] = [
    {
      text: 'Free Landing Pages',
      route: '/landing' 
    },
    {
      text: 'Features',
      route: '/landing'
    },
    {
      text:'Service',
      route: '/landing'
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
