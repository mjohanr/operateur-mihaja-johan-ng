import { Component, OnInit, Input } from '@angular/core';
import { Tarif } from 'src/environments/environment';
import { TarifService } from '../../services/tarif.service';

@Component({
	selector: 'app-card-tarif',
	templateUrl: './card-tarif.component.html',
	styleUrls: ['./card-tarif.component.css']
})
export class CardTarifComponent implements OnInit {

	@Input() tarif: Tarif;
	constructor(private service : TarifService) { }

	ngOnInit(): void {
		console.table(this.tarif)
	}

}
