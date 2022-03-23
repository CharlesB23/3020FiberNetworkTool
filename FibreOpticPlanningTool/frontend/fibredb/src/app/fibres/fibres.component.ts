import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Fibre } from '../fibres.model';
import { FibresService } from '../fibres.service';

@Component({
  selector: 'app-fibres',
  templateUrl: './fibres.component.html',
  styleUrls: ['./fibres.component.css']
})
export class FibresComponent implements OnInit {

  constructor(public FibreService: FibresService) { }
  private fibreSub: Subscription;

  fibres: Fibre[] = [];

  onAdd(Name: string, FibreAttenuation: string, FibreConnectorLoss: string, FibreDispersion: string, Link: string){

    this.FibreService.addFibre(Name, FibreAttenuation, FibreConnectorLoss, FibreDispersion, Link)
    .subscribe((std:any)=>{console.log(std)})
  }

  ngOnInit(): void {
    this.fibreSub = this.FibreService.getFibre()
    .subscribe((fibre: Fibre[])=>{
      this.fibres = fibre;
    });

  }

}
