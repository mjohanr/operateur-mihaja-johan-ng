import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarif } from 'src/environments/environment';
import { TarifService } from '../services/tarif.service';

@Component({
  selector: 'app-modification-tarif',
  templateUrl: './modification-tarif.component.html',
  styleUrls: ['./modification-tarif.component.css']
})
export class ModificationTarifComponent implements OnInit {
tarif : Tarif;
id : string;
message : string;
prix : number;
constructor(private route : ActivatedRoute, private service : TarifService, private router: Router ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('id');
    this.getTarif();
    console.log(this.tarif);
  }

  getTarif() {
    const success = response => {
      if (response['code'] == 200) {
        this.tarif = response['data'];
        console.log(this.tarif);
      } else if(response['code'] == 403){
        this.router.navigate(['login'], {queryParams: {message: response['message']}});
      } else {
        this.message = response['message'];
      }
    }

    const error = response => {
      this.message = "Error";
    }
    this.service.getById(this.id).subscribe(success, error);
  }

  update() {
    console.log(this.tarif);
    const input = {
      id : this.id,
      prix : this.tarif.prix
    };
    const success = response => {
      if (response['code'] == 200) {
        this.tarif = response['data'];
        this.message = response['message'];
        alert(this.message);
        this.router.navigate(['tarifs']);
      } else if(response['code'] == 403){
        this.router.navigate(['login'], {queryParams: {message: response['message']}});
      } else {
        this.message = response['message'];
      }
    }

    const error = response => {
      this.message = "Error";
    }

    this.service.update(input).subscribe(success, error);
    console.log(this.tarif);
    this.prix = null;
  }
}
