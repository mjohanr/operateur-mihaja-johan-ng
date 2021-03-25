import { Component, NgModule, OnInit } from '@angular/core';
import { Tarif, produits } from 'src/environments/environment';
import { ModificationTarifComponent } from '../modification-tarif/modification-tarif.component';
import { TarifService } from '../services/tarif.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.css']
})

export class TarifComponent implements OnInit {
  tarifs : Tarif[] = [];
  tarifs_appel: Tarif[] = [];
  tarifs_message: Tarif[] = [];
  tarifs_internet: Tarif[] = [];

  message : string;
  constructor(private service : TarifService, private router: Router) { }

  ngOnInit(): void {
    this.getTarifs();
  }

  getTarifs() {
    const success = response => {
      if (response['code'] == 200) {
        this.tarifs = response['data'];
        this.trier_tarifs(this.tarifs);
      } else if(response['code'] == 403){
        this.router.navigate(['login'], {queryParams: {message: response['message']}});
      } else {
        this.message = response['message'];
      }
    }

    const error = response => {
      console.log(response);
      this.message = response['message'];
    }
    this.service.getData().subscribe(success, error);
  }

  trier_tarifs(tarifs: Tarif[]) {
    for(var item of tarifs) {
      if(item.produit == produits[0]) {
        this.tarifs_appel.push(item);
      }
      if(item.produit == produits[1]) {
        this.tarifs_message.push(item);
      }
      if(item.produit == produits[2]) {
        this.tarifs_internet.push(item);
      }
    }
  }
}
