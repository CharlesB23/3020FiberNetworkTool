import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Repeater } from './repeaters.model';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class RepeatersService {

  private repeaters: Repeater[] = [];
  private repeatersUpdated = new Subject<Repeater[]>();


  constructor(private web:WebService) { }

  addReapter( Name: string,
    DataRate: string,
    Wavelength: string,
    Power: string,
    Range: string,
    Link: string
){
  return this.web.post('repeaters', {Name, DataRate, Wavelength, Power, Range, Link});
}
  getReapter(){
    return this.web.get('repeaters')
  }
  getRepeaterUpdateListener(){
    return this.repeatersUpdated.asObservable();

  }
}
