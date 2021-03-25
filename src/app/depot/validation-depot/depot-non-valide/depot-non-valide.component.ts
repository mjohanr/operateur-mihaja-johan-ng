import { Component, OnInit, Input } from '@angular/core';
import { MobileMoneyService } from 'src/app/services/mobile-money.service';
import { DepotNonValide } from 'src/environments/environment';
import { ValidationDepotComponent } from '../validation-depot.component';

@Component({
  selector: 'app-depot-non-valide',
  templateUrl: './depot-non-valide.component.html',
  styleUrls: ['./depot-non-valide.component.css']
})
export class DepotNonValideComponent implements OnInit {

@Input() depot: DepotNonValide;
  constructor(private validationDepot: ValidationDepotComponent, private service: MobileMoneyService) { }

  ngOnInit(): void {
  	console.table(this.depot);
  }

  update(depot: DepotNonValide) {
    const input = depot;
    const success = response => {
      console.log(response);
      alert(response['message']);
    }
    const error = response => {
      this.validationDepot.message = response['message'];
      alert(response['message']);
    }
    this.service.update(input).subscribe(success, error);
    this.validationDepot.get_depot_non_valide();
  }

}
