import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DvdService {

  constructor(private http: Http) { }

  getList() {
    return this.http.get(`${environment.BASE_URL}/api/dvds`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${environment.BASE_URL}/api/dvds/${id}`)
      .map((res) => res.json());
  }

  getVenue(venue) {
    return this.http.get(`${environment.BASE_URL}/api/dvds/location/venue/${venue}`)
      .map((res) => res.json());
  }

  getCity(city) {
    return this.http.get(`${environment.BASE_URL}/api/dvds/location/city/${city}`)
      .map((res) => res.json());
  }

  getSong(song) {
    return this.http.get(`${environment.BASE_URL}/api/dvds/song/${song}`)
      .map((res) => res.json());
  }
}
