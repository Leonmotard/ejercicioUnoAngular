import { Component, Input } from '@angular/core';
import { FeatureService } from '../services/feature.service';

@Component({
  selector: 'app-icon-card',
  standalone: true,
  imports: [],
  templateUrl: './icon-card.component.html',
  styleUrl: './icon-card.component.scss'
})
export class IconCardComponent {
  @Input() id=0;
  @Input() icon='';
  @Input() title='';
  @Input() description='';

  constructor(private featureService: FeatureService){}
  
  updateFeature(){
    this.featureService.putFeature({
      id: this.id,
      icon: this.icon,
      title: this.title,
      description: this.description + '[UPDATED]'
    }).subscribe(res=>console.log(res));
  }

  deleteFeature(){
    this.featureService.deleteFeature(this.id).subscribe(res=>console.log(res));
  }
}
