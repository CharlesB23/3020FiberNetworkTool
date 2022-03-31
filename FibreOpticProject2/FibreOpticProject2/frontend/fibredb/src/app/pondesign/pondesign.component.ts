import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pondesign } from '../pondesign.model';
import { PondesignService } from '../pondesign.service';

@Component({
  selector: 'app-pondesign',
  templateUrl: './pondesign.component.html',
  styleUrls: ['./pondesign.component.css'],
})
export class PondesignComponent implements OnInit {
  constructor(public PondesignServive: PondesignService) {}

  private pondesignSub: Subscription;

  pondesigns: Pondesign[] = [];

  onAdd(Name: string,
    TotalBandwidthdownA1: string,
    TotalBandwidthdownA2: string,
    TotalBandwidthdownA3: string,
    TotalBandwidthdownA4: string,
    TotalBandwidthdownA5: string,
    TotalBandwidthupA1: string,
    TotalBandwidthupA2: string,
    TotalBandwidthupA3: string,
    TotalBandwidthupA4: string,
    TotalBandwidthupA5: string,
    TotalBandwidthDown: string,
    TotalBandwidthUp: string,
    NumUsersA1: string,
    NumUsersA2: string,
    NumUsersA3: string,
    NumUsersA4: string,
    NumUsersA5: string,
    DownloadRateA1: string,
    DownloadRateA2: string,
    DownloadRateA3: string,
    DownloadRateA4: string,
    DownloadRateA5: string,
    UploadRateA1: string,
    UploadRateA2: string,
    UploadRateA3: string,
    UploadRateA4: string,
    UploadRateA5: string,
    LatOLT: string,
    LongOLT: string,
    LatSplit: string,
    LongSplit: string,
    LatU1: string,
    LongU1: string,
    LatU2: string,
    LongU2: string,
    LatU3: string,
    LongU3: string,
    LatU4: string,
    LongU4: string,
    LatU5: string,
    LongU5: string,
    OSlength: string,
    SU1length: string,
    SU2length: string,
    SU3length: string,
    SU4length: string,
    SU5length: string,
    fibrelengthU1: string,
    fibrelengthU2: string,
    fibrelengthU3: string,
    fibrelengthU4: string,
    fibrelengthU5: string,
    connectorlossfib: string,
    NumConOS: string,
    NumConSU1: string,
    NumConSU2: string,
    NumConSU3: string,
    NumConSU4: string,
    NumConSU5: string,
   ConLossU1: string,
    ConLossU2: string,
    ConLossU3: string,
    ConLossU4: string,
    ConLossU5: string,
    Attenfib: string,
    AttenuationLossU1: string,
    AttenuationLossU2: string,
    AttenuationLossU3: string,
    AttenuationLossU4: string,
    AttenuationLossU5: string,
    SpliceLossfib: string,
    NumSplOS: string,
    NumSplU1: string,
    NumSplU2: string,
    NumSplU3: string,
    NumSplU4: string,
    NumSplU5: string,
    splicelossU1: string,
    splicelossU2: string,
    splicelossU3: string,
    splicelossU4: string,
    splicelossU5: string,
    splitratio: string,
    splitterLossU1: string,
    insersionLossU1: string,
    insersionLossU2: string,
    insersionLossU3: string,
    insersionLossU4: string,
    insersionLossU5: string,
    TotalLossU1: string,
    TotalLossU2: string,
    TotalLossU3: string,
    TotalLossU4: string,
    TotalLossU5: string,
    FibreDispersion: string,
    OSdispersion:  string, 
    U1dispersion:  string, 
    U2dispersion:  string, 
    U3dispersion: string,
    U4dispersion:  string, 
    U5dispersion:  string 
  ) {
    this.PondesignServive.addPondesign(Name,
      TotalBandwidthdownA1,
      TotalBandwidthdownA2,
      TotalBandwidthdownA3,
      TotalBandwidthdownA4,
      TotalBandwidthdownA5,
      TotalBandwidthupA1,
      TotalBandwidthupA2,
      TotalBandwidthupA3,
      TotalBandwidthupA4,
      TotalBandwidthupA5,
      TotalBandwidthDown,
      TotalBandwidthUp,
      NumUsersA1,
      NumUsersA2,
      NumUsersA3,
      NumUsersA4,
      NumUsersA5,
      DownloadRateA1,
      DownloadRateA2,
      DownloadRateA3,
      DownloadRateA4,
      DownloadRateA5,
      UploadRateA1,
      UploadRateA2,
      UploadRateA3,
      UploadRateA4,
      UploadRateA5,
      LatOLT,
      LongOLT,
      LatSplit,
      LongSplit,
      LatU1,
      LongU1,
      LatU2,
      LongU2,
      LatU3,
      LongU3,
      LatU4,
      LongU4,
      LatU5,
      LongU5,
      OSlength,
      SU1length,
      SU2length,
      SU3length,
      SU4length,
      SU5length,
      fibrelengthU1,
      fibrelengthU2,
      fibrelengthU3,
      fibrelengthU4,
      fibrelengthU5,
      connectorlossfib,
      NumConOS,
      NumConSU1,
      NumConSU2,
      NumConSU3,
      NumConSU4,
      NumConSU5,
      ConLossU1,
      ConLossU2,
      ConLossU3,
      ConLossU4,
      ConLossU5,
      Attenfib,
      AttenuationLossU1,
      AttenuationLossU2,
      AttenuationLossU3,
      AttenuationLossU4,
      AttenuationLossU5,
      SpliceLossfib,
      NumSplOS,
      NumSplU1,
      NumSplU2,
      NumSplU3,
      NumSplU4,
      NumSplU5,
      splicelossU1,
      splicelossU2,
      splicelossU3,
      splicelossU4,
      splicelossU5,
      splitratio,
      splitterLossU1,
      insersionLossU1,
      insersionLossU2,
      insersionLossU3,
      insersionLossU4,
      insersionLossU5,
     TotalLossU1,
      TotalLossU2,
      TotalLossU3,
      TotalLossU4,
     TotalLossU5,
     FibreDispersion,
      OSdispersion,
     U1dispersion,
     U2dispersion,
     U3dispersion,
     U4dispersion,
     U5dispersion
    ).subscribe((std: any) => {
      console.log(std);
    });
  }

  ngOnInit(): void {
    this.pondesignSub = this.PondesignServive.getPondesign().subscribe(
      (pondesign: Pondesign[]) => {
        this.pondesigns = pondesign;
      }
    );
  }
}