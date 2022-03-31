import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Metrodesign } from './metrodesigns.model';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class MetrodesignsService {

  private metrodeisgns: Metrodesign[] = [];
  private metrodesignsUpdated = new Subject<Metrodesign[]>();
  

  constructor(private web:WebService) { }
  addMetrodeisgn(Name: string,
    TotalDistance: string,
    site1lat: string,
    site1long: string,
    cenlat: string,

    cenlong: string,

    ConnectorLoss: string,

    NumCons: string,

    Confib: string,

    AttenuationLoss: string,

    AttenFib: string,

    SpliceLoss: string,

    NumSplices: string,

    RecievedPower: string,

    TransmittedPower: string,

    Dispersion: string,

    DisFib: string){
    return this.web.post('metrodesigns', {Name, TotalDistance, site1lat, site1long, cenlat, cenlong,  ConnectorLoss, NumCons, Confib,
      AttenuationLoss, AttenFib, SpliceLoss, NumSplices, RecievedPower, TransmittedPower, Dispersion, DisFib  });
  }
  getMetrodesign(){
    return this.web.get('metrodesigns')
  }
  getMetrodesignListener(){
    return this.metrodesignsUpdated.asObservable();
  }
}
