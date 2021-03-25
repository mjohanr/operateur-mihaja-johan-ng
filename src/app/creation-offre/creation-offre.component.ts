import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Forfait, Offres } from 'src/environments/environment';
import { OffresService } from '../services/offres.service';

@Component({
  selector: 'app-creation-offre',
  templateUrl: './creation-offre.component.html',
  styleUrls: ['./creation-offre.component.css']
})
export class CreationOffreComponent implements OnInit {
offre : Offres;
appel : string = "Appel";
message : string = "Message";
internet : string = "Internet";

  constructor(public service : OffresService, private router: Router) { }

  ngOnInit(): void {
    this.offre = new Offres();
    this.offre.forfaits = [];
  }

  create() {
    const input = this.offre;
    const success = response => {
      if (response['code'] == 200) {
        this.offre = response['data'];
        this.message = response['message'];
      } else if(response['code'] == 403){
        this.router.navigate(['login'], {queryParams: {message: response['message']}});
      } else {
        this.message = response['message'];
      }
    }

    const error = response => {
      this.message = "Error";
    }

    this.service.create(input).subscribe(success, error);
    this.router.navigate(['offres']);
  }

}
