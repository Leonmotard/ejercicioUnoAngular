import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../../core/services/feature.service';
import { Subscription } from 'rxjs';
import { Feature } from '../../core/Model/feature.model';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent implements OnInit{

  groupForm!: FormGroup;
  

  constructor(private featureService: FeatureService){}

  features?: Feature[];
  
  subscription = new Subscription;

  ngOnInit(){
    this.subscription.add(this.featureService
    .getFeatures()
    .subscribe(
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
  );


    this.groupForm = new FormGroup({    
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      landingType: new FormControl(''),
      feature: new FormControl(null, [
        Validators.required
      ]),
      count: new FormControl(0,[
        Validators.required,
        Validators.min(1)
      ])
      });
  }

  get email() {
    return this.groupForm.get('email');
  }

  get feature(){
    return this.groupForm.get('feature');
  }

  get count(){
    return this.groupForm.get('count');
  }
  
  onSubmit(){
    console.log(this.groupForm.value);
  }
}
