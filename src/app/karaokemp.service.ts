import { Injectable } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
const API_KEY = 'AIzaSyAGDd4JexGEldbkRsq-dneYSjEHj8DQY_c';
const KARAOKEMP_BACKEND_URL = 'https://karaokemp-backend.herokuapp.com/';
//const KARAOKEMP_BACKEND_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class KaraokempService {
  getVideo(videoId: string): any {
    const INFO_URL = `${KARAOKEMP_BACKEND_URL}info`;
    const params = new HttpParams().set('id',videoId);
    return this.http.get(INFO_URL, {params});
  }
  
  constructor(private http: HttpClient) { }

  getUploads() {
    return this.http.get<Object[]>(`${KARAOKEMP_BACKEND_URL}uploads`);
  }



  upload(song) {
  return this.http.post(`${KARAOKEMP_BACKEND_URL}upload`, song);
  }



}

