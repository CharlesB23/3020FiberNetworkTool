import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StandardsComponent } from './standards/standards.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PondesignComponent } from './pondesign/pondesign.component';
import { FibresComponent } from './fibres/fibres.component';
import { SubdesignsComponent } from './subdesigns/subdesigns.component';
import { OltsComponent } from './olts/olts.component';
import { OnusComponent } from './onus/onus.component';
import { SplittersComponent } from './splitters/splitters.component';
import { MetrodesignsComponent } from './metrodesigns/metrodesigns.component';
import { RepeatersComponent } from './repeaters/repeaters.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StandardsComponent,
    EquipmentComponent,
    NavbarComponent,
    PondesignComponent,
    FibresComponent,
    SubdesignsComponent,
    OltsComponent,
    OnusComponent,
    SplittersComponent,
    MetrodesignsComponent,
    RepeatersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    HttpClientModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
