import { HttpFeature } from '@angular/common/http';
import { Component } from '@angular/core';
import { OutlineButtonComponent } from '../../core/outline-button/outline-button.component';
import { FeatureService } from '../../core/services/feature.service';
import { Feature } from '../../core/Model/feature.model';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    OutlineButtonComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(private featureService: FeatureService){}

  newFeature(){
    this.featureService.postFeatures({
      id: 4,
      icon: 'home',
      description: 'descripción aleatoria',
      title: 'feature test'
    }as Feature).subscribe();
  }

}
