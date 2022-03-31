import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Onu } from './onus.model';
import { WebService } from './web.service';


@Injectable({
  providedIn: 'root'
})
export class OnusService {

  private onus: Onu[] = [];
  private onusUpdated = new Subject<Onu[]>();
  constructor(private web:WebService) { }

  addOnu(Name: string,
    StandardSpec: string,
    DownstreamRate: string,
    UpstreamRate: string,
    PowerConsumption: string,
    Link: string
  ){
    return this.web.post('onus', {Name, StandardSpec, DownstreamRate, UpstreamRate, PowerConsumption, Link});
  }
  getOnu(){
    return this.web.get('onus')
  }
  getOnuUpdateListener(){
    return this.onusUpdated.asObservable();
  }
}
