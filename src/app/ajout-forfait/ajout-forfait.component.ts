import { Component, Input, OnInit } from '@angular/core';
import { Forfait, Offres, Utilisation } from 'src/environments/environment';

@Component({
  selector: 'app-ajout-forfait',
  templateUrl: './ajout-forfait.component.html',
  styleUrls: ['./ajout-forfait.component.css']
})
export class AjoutForfaitComponent implements OnInit {
@Input() offre : Offres;
@Input() type : string;
appel : boolean = false;
typeAppel : number;
forfait : Forfait;

  constructor() { }

  ngOnInit(): void {
    if(this.type == "Appel") this.appel = true;
    this.forfait = new Forfait();
    if(this.type != "Internet") this.forfait.utilisation = new Utilisation();
  }

  add() {
    this.forfait.produit = this.type;
    if(this.type == "Appel") {
      if(this.typeAppel == 1) {
        this.forfait.valeur = this.offre.tarif;
        this.forfait.unite = "Ar";
        this.forfait.utilisation.unite = "sec";
      } else {
        this.forfait.unite = "minutes";
      }
    }
    if(this.type == "Message") {
      this.forfait.unite = "SMS";
    }
    console.log(this.forfait);
    this.offre.forfaits.push(this.forfait);
  }

}
