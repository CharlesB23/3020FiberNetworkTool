import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OnusService } from '../onus.service';
import { Onu } from '../onus.model';

@Component({
  selector: 'app-onus',
  templateUrl: './onus.component.html',
  styleUrls: ['./onus.component.css']
})
export class OnusComponent implements OnInit {

  constructor(public OnuService: OnusService) { }
  private onuSub: Subscription;

  onus: Onu[] = [];

  onAdd(Name: string,
    StandardSpec: string,
    DownstreamRate: string,
    UpstreamRate: string,
    PowerConsumption: string,
    Link: string){
      this.OnuService.addOnu(Name, StandardSpec, DownstreamRate, UpstreamRate, PowerConsumption, Link)
      .subscribe((std:any)=>{console.log(std)})
    
  }


  ngOnInit(): void {
    this.onuSub = this.OnuService.getOnu()
    .subscribe((onu: Onu[])=>{
      this.onus = onu;
    })
  }

}
