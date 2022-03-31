import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Olt } from '../olts.model';
import { OltsService } from '../olts.service';

@Component({
  selector: 'app-olts',
  templateUrl: './olts.component.html',
  styleUrls: ['./olts.component.css']
})
export class OltsComponent implements OnInit {

  constructor(public OltService: OltsService) { }
  private oltSub: Subscription;

  olts: Olt[] = [];

  onAdd(Name: string,
    StandardSpec: string,
    DownstreamRate: string,
    UpstreamRate: string,
    Splitratio: string,
    TotalReach: string,
    PowerConsumption: string,
    Link: string){
      this.OltService.addOlt(Name, StandardSpec, DownstreamRate, UpstreamRate, Splitratio, TotalReach, PowerConsumption, Link)
      .subscribe((std:any)=>{console.log(std)})
    }

  ngOnInit(): void {
    this.oltSub = this.OltService.getOlt()
    .subscribe((olt: Olt[])=>{
      this.olts = olt;
    });
  }

}
