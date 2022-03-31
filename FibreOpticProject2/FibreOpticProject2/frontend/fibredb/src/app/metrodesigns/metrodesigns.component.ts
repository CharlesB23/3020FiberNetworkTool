import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Metrodesign } from '../metrodesigns.model';
import { MetrodesignsService } from '../metrodesigns.service';

@Component({
  selector: 'app-metrodesigns',
  templateUrl: './metrodesigns.component.html',
  styleUrls: ['./metrodesigns.component.css']
})
export class MetrodesignsComponent implements OnInit {

  constructor(public MetrodesignService: MetrodesignsService) { }
  private metrodesignSub: Subscription;

  metrodesigns: Metrodesign[] = [];

  onAdd(Name: string,
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
    this.MetrodesignService.addMetrodeisgn(Name, TotalDistance, site1lat, site1long, cenlat, cenlong,  ConnectorLoss, NumCons, Confib,
      AttenuationLoss, AttenFib, SpliceLoss, NumSplices, RecievedPower, TransmittedPower, Dispersion, DisFib )
    .subscribe((std:any)=>{console.log(std)})

  }

  ngOnInit(): void {
    this.metrodesignSub = this.MetrodesignService.getMetrodesign()
    .subscribe((metrodesign: Metrodesign[])=>{
      this.metrodesigns = metrodesign;
    })
  }

}
