import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Splitter } from './splitters.model';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class SplittersService {

  private splitters: Splitter[] = [];
  private splittersUpdated = new Subject<Splitter[]>();

  constructor(private web:WebService) { }

  addSplitter(
    Name: string,

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

    Link:string,

  ){
    return this.web.post('splitters', {Name, Wavelength, InsersionLoss128, InsersionLoss64, InsersionLoss32,
      InsersionLoss16, InsersionLoss8, InsersionLoss4, InsersionLoss2, Polarization128, Polarization64, 
      Polarization32, Polarization16, Polarization8, Polarization4, Polarization2, MaxPower, SplitRatio, Link
      });

  }
  getSplitter(){
    return this.web.get('splitters')
  }
  getSplitterUpdateListener(){
    return this.splittersUpdated.asObservable();
  }
}
