import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { IconCardComponent } from './core/icon-card/icon-card.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule, 
    HeaderComponent,
    LandingPageComponent,
    IconCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ejercicioUno';
  features = [
    {
      icon: 'add_box',
      title: 'Easy to use',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    },
    {
      icon: 'star_half',
      title: '100% responsive',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    },
    {
      icon: 'system_update_alt',
      title: '50+ new pages',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    }
  ];
}
