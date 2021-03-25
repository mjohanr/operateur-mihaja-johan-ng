import { Component, OnInit } from '@angular/core';
import { Offres } from 'src/environments/environment';
import { Router } from '@angular/router';
import { OffresService } from '../services/offres.service';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {
  offres : Offres[];
  message : string;

  constructor(private service : OffresService, private router: Router) { }

  ngOnInit(): void {
    this.getOffres();
    console.log(this.offres);
  }

  getOffres() {
    const success = response => {
      console.log(response);
      if (response['code'] == 200) {
        this.offres = response['data'];
        console.log(this.offres);
      } else if(response['code'] == 403){
        this.router.navigate(['login'], {queryParams: {message: response['message']}});
      } else {
        this.message = response['message'];
      }
    }

    const error = response => {
      this.message = response['message'];
    }
    this.service.getData().subscribe(success, error);
  }

  delete(id) {
    const success = response => {
      console.log(response);
      if (response['code'] == 200) {
        this.offres = response['data'];
        this.message = response['message'];
        console.log(this.offres);
      } else if(response['code'] == 403){
        this.router.navigate(['login'], {queryParams: {message: response['message']}});
      } else {
        this.message = response['message'];
      }
    }

    const error = response => {
      this.message = "Error";
    }
    this.service.delete(id).subscribe(success, error);
    // console.log("deleted");
  }

  deleteConfirmation(id, nom) {
    if(confirm("Supprimer "+nom+" ?")) {
      this.delete(id);
    }
  }

}
