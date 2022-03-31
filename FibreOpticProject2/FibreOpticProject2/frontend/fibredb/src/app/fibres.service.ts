import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WebService } from './web.service';
import { Fibre } from './fibres.model';

@Injectable({
  providedIn: 'root'
})
export class FibresService {

  private fibres: Fibre[] = [];
  private fibresUpdated = new Subject<Fibre[]>();

  constructor(private web:WebService) { }

  addFibre(Name: string, FibreAttenuation: string, FibreConnectorLoss: string, FibreDispersion: string, Link: string ){
    return this.web.post('fibres', {Name, FibreAttenuation, FibreConnectorLoss, FibreDispersion, Link });

  }
  getFibre(){
    return this.web.get('fibres')
  }
  getFibreUpdateListener(){
    return this.fibresUpdated.asObservable();
  }
}
