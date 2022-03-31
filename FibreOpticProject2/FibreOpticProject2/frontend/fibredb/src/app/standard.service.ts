import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Standard } from './standards.model';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class StandardService {

  private standards: Standard[] = [];
  private standardsUpdated = new Subject<Standard[]>();
  constructor(private web:WebService) { }


  addStandard(Name: string, DownstreamRate:string, UpstreamRate: string, Splitlimit: string, Reach: string, PowerBudgetMax: string, PowerBudgetMin: string, Link: string, DispersionBudget: string ){
    return this.web.post('standards', {Name, DownstreamRate, UpstreamRate, Splitlimit, Reach, PowerBudgetMax, PowerBudgetMin, Link, DispersionBudget});
    //const standard: Standard =  {Name: Name, DownstreamRate:DownstreamRate, UpstreamRate: UpstreamRate, Splitlimit: Splitlimit, Reach: Reach, PowerBudgetMax: PowerBudgetMax, PowerBudgetMin: PowerBudgetMin};
 
  }

  getStandard(){
    return this.web.get('standards')
  }
  getStandardUpdateListener(){
    return this.standardsUpdated.asObservable();
  }
    
  
}
