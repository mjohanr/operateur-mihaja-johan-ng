import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarifComponent } from './tarif/tarif.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModificationTarifComponent } from './modification-tarif/modification-tarif.component';
import { OffresComponent } from './offres/offres.component';
import { ValidationDepotComponent } from './depot/validation-depot/validation-depot.component';
import { ModificationOffreComponent } from './modification-offre/modification-offre.component';
import { AjoutForfaitComponent } from './ajout-forfait/ajout-forfait.component';
import { ModificationForfaitComponent } from './modification-forfait/modification-forfait.component';
import { CreationOffreComponent } from './creation-offre/creation-offre.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepotNonValideComponent } from './depot/validation-depot/depot-non-valide/depot-non-valide.component';
import { CardTarifComponent } from './tarif/card-tarif/card-tarif.component';
import { LoginComponent } from './login/login.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    TarifComponent,
    ModificationTarifComponent,
    OffresComponent,
    ValidationDepotComponent,
    ModificationOffreComponent,
    AjoutForfaitComponent,
    ModificationForfaitComponent,
    CreationOffreComponent,
    NavComponent,
    PageNotFoundComponent,
    DepotNonValideComponent,
    CardTarifComponent,
    LoginComponent,
    StatistiquesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
