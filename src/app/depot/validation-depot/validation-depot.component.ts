import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileMoneyService } from 'src/app/services/mobile-money.service';
import { DepotNonValide } from 'src/environments/environment';

@Component({
  selector: 'app-validation-depot',
  templateUrl: './validation-depot.component.html',
  styleUrls: ['./validation-depot.component.css']
})
export class ValidationDepotComponent implements OnInit {
  depotNonValide: DepotNonValide[] = [];
  message : string = null;
  constructor(private service: MobileMoneyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.get_depot_non_valide();
  }

  get_depot_non_valide() {
    const success = response => {
      if (response['code'] == 200) {
        this.depotNonValide = response['data'];
      } else if(response['code'] == 403){
        this.router.navigate(['login'], {queryParams: {message: response['message']}});
      } else {
        this.message = response['message'];
      }
    }
    const error = response => {
      console.log(response);
      this.message = response.message;
    }
    this.service.getData().subscribe(success, error);
  }
}
