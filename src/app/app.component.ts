import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { IconCardComponent } from './core/icon-card/icon-card.component';
import { CommonModule } from '@angular/common';
import { Feature } from './core/Model/feature.model';
import { FeatureService } from './core/services/feature.service';
import { map, Subscription } from 'rxjs';
import { OutlineButtonComponent } from './core/outline-button/outline-button.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule, 
    HeaderComponent,
    LandingPageComponent,
    IconCardComponent,
    OutlineButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'ejercicioUno';
  
  features?: Feature[];
  
  subscription = new Subscription;
  constructor(private featureService: FeatureService){}
 

  ngOnInit(){
    // pipes viene con la librería  RxJS
    this.subscription.add(this.featureService.getFeatures().pipe(
      map(res=>{
        res[0].title ="Hard to use"
        return res;
      })
    ).subscribe(
      {
        next: res=>{
          console.log("se reciben datos");
          this.features = res;
        },
        error: error =>{
          console.warn("Ha ocurrido un error con código: ", error);
        },
        complete: ()=> {
          console.log('Emision Terminada');
        }
      }
    )  
  )
  }

  newFeature(){
    this.featureService.postFeatures({
      id: 4,
      icon: 'home',
      description: 'descripción aleatoria',
      title: 'feature test'
    }as Feature).subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
