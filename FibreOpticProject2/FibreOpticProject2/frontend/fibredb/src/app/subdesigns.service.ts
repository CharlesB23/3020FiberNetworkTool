import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Subdesign } from './subdesigns.model';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class SubdesignsService {

  private subdesigns: Subdesign[]=[];
  private subdesignsUpdated = new Subject<Subdesign[]>();
  constructor(private web:WebService) { }

  addSubdesign( Name: string,
    
    LatStation1: string ,

    LongStation1: string,

    LatStation2: string,

    LongStation2: string,

    TotalDistance: string,

    ConnectorLoss: string,

    ConnectorLossFib: string,

    NumCons: string,

    AttenuationLoss: string,

    AttenuationFib: string,

    SpliceLoss: string,

    SpliceFib: string,

    NumSplices: string,

    ReceivedPower: string,

    TransmitterPower: string,

    ReceiverSensitivity: string,

    LossLimit:string,

    dispersion: string,

    dispersionfib: string,

    NumberofRepeaters:string,
){
    return this.web.post('subdesigns', {Name,
      LatStation1 ,

      LongStation1,
  
      LatStation2,
  
      LongStation2,
  
      TotalDistance,
  
      ConnectorLoss,
  
      ConnectorLossFib,
  
      NumCons,
  
      AttenuationLoss,
  
      AttenuationFib,
  
      SpliceLoss,
  
      SpliceFib,
  
      NumSplices,
  
      ReceivedPower,
  
      TransmitterPower,
  
      ReceiverSensitivity,
  
      LossLimit,
  
      dispersion,
  
      dispersionfib,
  
      NumberofRepeaters,
   } );
  }
  getSubdesign(){
    return this.web.get('subdesigns')
  }
  getSubdesignUpdateListener(){
    return this.subdesignsUpdated.asObservable();
  }
}
