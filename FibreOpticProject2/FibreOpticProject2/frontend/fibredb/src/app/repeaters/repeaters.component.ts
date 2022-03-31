import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Repeater } from '../repeaters.model';
import { RepeatersService } from '../repeaters.service';

@Component({
  selector: 'app-repeaters',
  templateUrl: './repeaters.component.html',
  styleUrls: ['./repeaters.component.css']
})
export class RepeatersComponent implements OnInit {

  constructor(public RepeaterService: RepeatersService) { }
  private repeaterSub: Subscription;

  repeaters: Repeater[] = [];

  onAdd(Name: string,
    DataRate: string,
    Wavelength: string,
    Power: string,
    Range: string,
    Link: string){
      this.RepeaterService.addReapter(Name,DataRate, Wavelength, Power, Range, Link  )
      .subscribe((std:any)=>{console.log(std)})
    }

  ngOnInit(): void {
    this.repeaterSub = this.RepeaterService.getReapter()
    .subscribe((repeater: Repeater[])=>{
      this.repeaters = repeater;
    })
    
  }

}
