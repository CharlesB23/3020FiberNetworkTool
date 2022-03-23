import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StandardService } from '../standard.service';
import { Standard } from '../standards.model';

@Component({
  selector: 'app-standards',
  templateUrl: './standards.component.html',
  styleUrls: ['./standards.component.css']
})
export class StandardsComponent implements OnInit {

  constructor(public StandardService: StandardService) { }

  //Name: string = "GPON";
  //DownstreamRate: number = 2488;
  //UpstreamRate: number = 2488;
  //Splitlimit: number = 64;
  //Reach: number = 60;
  //PowerBudgetMax: number = 25;
  //PowerBudgetMin: number = 15;
  private standardSub: Subscription;
  
  standards: Standard[] = [];

  onAdd(Name: string, DownstreamRate:string, UpstreamRate: string, Splitlimit: string, Reach: string, PowerBudgetMax: string, PowerBudgetMin: string, Link: string){
    //const DownstreamRate: number = +DownstreamRateS;
    //const UpstreamRate: number = +UpstreamRateS;
    //const Splitlimit : number = +SplitlimitS;
    //const Reach : number = +ReachS;
    //const PowerBudgetMax : number = +PowerBudgetMaxS;
    //const PowerBudgetMin : number = +PowerBudgetMinS;


    this.StandardService.addStandard(Name, DownstreamRate, UpstreamRate, Splitlimit, Reach, PowerBudgetMax, PowerBudgetMin, Link)
    .subscribe((std:any)=>{console.log(std)})
  }

  ngOnInit(): void {
    
    this.standardSub = this.StandardService.getStandard()
    .subscribe((standard: Standard[])=>{
      this.standards = standard;
    });
  }
 
}
 