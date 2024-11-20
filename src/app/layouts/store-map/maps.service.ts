import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapsService {
  private googleMapsApiUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCm9vjSJWaJTZfL3Ef8N_y8z5ZVt0q8sWg';

  constructor(private http: HttpClient) {}

  loadMapsApi(): Observable<any> {
    return this.http.get(this.googleMapsApiUrl, { responseType: 'text' });
  }
}


