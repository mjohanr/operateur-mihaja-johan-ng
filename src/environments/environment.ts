// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const base_url = "http://localhost:8080/";

export const produits = ['Appel', 'Message', 'Internet'];

export class Tarif {
    id : number;
    produit : string;
    operateur : string;
    prix : number;
    unite : string;
};

export class Utilisation {
  unite : string;
  operateur: number;
  autres: number;
  international : number;
  constructor () {}
}

export class Forfait {
  produit : string;
  unite : string;
  valeur : number;
  utilisation : Utilisation

  constructor () {}
}

export class Offres {
  id : string;
  idOffre : string;
  nom : string;
  tarif : number;
  validite : number;
  forfaits : Forfait[];
}

export class DepotNonValide {
  id: string;
  nom: string;
  numero: string;
  cin: string;
  valeur: number;
  dateMobileMoney: string;
  estValidee: string;
}

export class Admin {
  identifiant: string;
  mdp: string;
}

export class Statistiques {
  titre : string;
  x :  string[];
  y : Datastat[];

}

export class Datastat {
  data : number[];
  label : string;
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
