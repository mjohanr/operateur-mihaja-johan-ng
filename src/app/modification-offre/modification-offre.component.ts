import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offres } from 'src/environments/environment';
import { OffresService } from '../services/offres.service';

@Component({
  selector: 'app-modification-offre',
  templateUrl: './modification-offre.component.html',
  styleUrls: ['./modification-offre.component.css']
})
export class ModificationOffreComponent implements OnInit {
id : string;
offre : Offres;
message : string;


  constructor(private route : ActivatedRoute, private service : OffresService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('id');
    this.getOffre();
  }

  getOffre() {
    const success = response => {
      if (response['code'] == 200) {
        this.offre = response['data'];
        // console.log(this.offre);
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
    console.log(this.offre);
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

    this.service.update(input).subscribe(success, error);
    this.router.navigate(['offres']);
  }

}
