import { Component, Input, OnInit } from '@angular/core';
import { Forfait } from 'src/environments/environment';

@Component({
  selector: 'app-modification-forfait',
  templateUrl: './modification-forfait.component.html',
  styleUrls: ['./modification-forfait.component.css']
})
export class ModificationForfaitComponent implements OnInit {
@Input() forfait : Forfait;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.forfait);
  }

  update() : void {
    console.log(this.forfait);
  }

}
