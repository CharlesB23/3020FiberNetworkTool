import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Olt } from './olts.model';
import { WebService } from './web.service';
@Injectable({
  providedIn: 'root'
})
export class OltsService {

  private olts: Olt[] = [];
  private oltsUpdated = new Subject<Olt[]>();
  constructor(private web:WebService) { }

  addOlt(Name: string,
    StandardSpec: string,
    DownstreamRate: string,
    UpstreamRate: string,
    Splitratio: string,
    TotalReach: string,
    PowerConsumption: string,
    Link: string,
){
  return this.web.post('olts',{Name, StandardSpec, DownstreamRate, UpstreamRate, Splitratio, TotalReach, PowerConsumption, Link});
}
getOlt(){
  return this.web.get('olts')
}
getOltUpdateListener(){
  return this.oltsUpdated.asObservable();
}
}
