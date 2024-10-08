import { Injectable } from '@angular/core';
import { Feature } from '../Model/feature.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(private httpClient: HttpClient){}

  apiUrl= 'http://localhost:3000/features';

  getFeatures() : Observable<Feature[]>{
    
      return this.httpClient.get<Feature[]>(this.apiUrl);
    }

  postFeatures(newFeature: Feature) : Observable<string> {
     return this.httpClient.post<string>(this.apiUrl, newFeature);
  }
  
  putFeature(updatedFeature: Feature): Observable<string>{
    return this.httpClient.put<string>(`${this.apiUrl}/${updatedFeature.id}`, updatedFeature);
  }

  deleteFeature(featureId: number): Observable<string>{
    return this.httpClient.delete<string>(`${this.apiUrl}/${featureId}`);
  }

}
