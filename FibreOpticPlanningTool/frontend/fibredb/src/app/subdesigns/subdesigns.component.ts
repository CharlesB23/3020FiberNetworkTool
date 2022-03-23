import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Subdesign } from '../subdesigns.model';
import { SubdesignsService } from '../subdesigns.service';

@Component({
  selector: 'app-subdesigns',
  templateUrl: './subdesigns.component.html',
  styleUrls: ['./subdesigns.component.css']
})
export class SubdesignsComponent implements OnInit {

  constructor(public SubdesignService: SubdesignsService) { }
  private subdeisgnSub: Subscription;
  subdesigns: Subdesign[] = [];

  onAdd( Name: string,
    
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

    NumberofRepeaters:string,){
    this.SubdesignService.addSubdesign(Name,
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
  
      NumberofRepeaters,)
    .subscribe((std:any)=>{console.log(std)})
  }

  ngOnInit(): void {
    this.subdeisgnSub = this.SubdesignService.getSubdesign()
    .subscribe((subdesign: Subdesign[])=>{
      this.subdesigns = subdesign;
    });
  }

}
