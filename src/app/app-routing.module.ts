import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreationOffreComponent } from './creation-offre/creation-offre.component';
import { ModificationOffreComponent } from './modification-offre/modification-offre.component';
import { ModificationTarifComponent } from './modification-tarif/modification-tarif.component';
import { OffresComponent } from './offres/offres.component';
import { TarifComponent } from './tarif/tarif.component';
import { LoginComponent } from './login/login.component';
import { ValidationDepotComponent } from './depot/validation-depot/validation-depot.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';

const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'stat', component: StatistiquesComponent },
{ path: 'validationDepot', component: ValidationDepotComponent },
{ path: 'tarifs', component: TarifComponent },
{ path: 'tarifs/modifier', component: ModificationTarifComponent },
{ path: 'offres', component: OffresComponent },
{ path: 'offres/modifier', component: ModificationOffreComponent },
{ path: 'offres/creer', component: CreationOffreComponent },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
