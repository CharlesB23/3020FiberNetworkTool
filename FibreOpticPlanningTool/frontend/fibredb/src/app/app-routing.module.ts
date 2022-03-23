import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentComponent } from './equipment/equipment.component';
import { HomeComponent } from './home/home.component';
import { PondesignComponent } from './pondesign/pondesign.component';
import { StandardsComponent } from './standards/standards.component';
import { FibresComponent } from './fibres/fibres.component';
import { SubdesignsComponent } from './subdesigns/subdesigns.component';
import { OltsComponent } from './olts/olts.component';
import { OnusComponent } from './onus/onus.component';
import { SplittersComponent } from './splitters/splitters.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"standards", component:StandardsComponent},
  {path:"equipment", component:EquipmentComponent},
  {path:"pondesign", component:PondesignComponent},
  {path:"fibres", component:FibresComponent},
  {path:"subdesigns", component:SubdesignsComponent},
  {path:"olts", component:OltsComponent},
  {path:"onus", component:OnusComponent},
  {path:"splitters", component:SplittersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
