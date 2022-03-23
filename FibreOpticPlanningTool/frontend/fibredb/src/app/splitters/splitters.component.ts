import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Splitter } from '../splitters.model';
import { SplittersService } from '../splitters.service';

@Component({
  selector: 'app-splitters',
  templateUrl: './splitters.component.html',
  styleUrls: ['./splitters.component.css']
})
export class SplittersComponent implements OnInit {

  constructor(public SplitterService: SplittersService) { }
  private splitterSub: Subscription;

  splitters: Splitter[] =[];

  onAdd(Name: string,

    Wavelength: string,
    
    InsersionLoss128:string,

    InsersionLoss64:string,

    InsersionLoss32:string,

    InsersionLoss16:string,

    InsersionLoss8:string,

    InsersionLoss4:string,

    InsersionLoss2:string,

    Polarization128:string,

    Polarization64:string,

    Polarization32:string,

    Polarization16:string,

    Polarization8:string,

    Polarization4:string,

    Polarization2:string,

    MaxPower:string,

    SplitRatio:string,
    
    Link:string,){
      this.SplitterService.addSplitter(Name, Wavelength, InsersionLoss128, InsersionLoss64, InsersionLoss32,
        InsersionLoss16, InsersionLoss8, InsersionLoss4, InsersionLoss2, Polarization128, Polarization64, 
        Polarization32, Polarization16, Polarization8, Polarization4, Polarization2, MaxPower, SplitRatio, Link)
        .subscribe((std:any)=>{console.log(std)})
    

  }

  ngOnInit(): void {
    this.splitterSub = this.SplitterService.getSplitter()
    .subscribe((splitter: Splitter[])=>{
      this.splitters = splitter;

    })
  }

}
