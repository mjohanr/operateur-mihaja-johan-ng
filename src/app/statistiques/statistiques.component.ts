import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Statistiques } from 'src/environments/environment';
import { StatistiquesService } from '../services/statistiques.service';


@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
stat : Statistiques;
message : string;
date : string = '2021-03-23T08:00';

  constructor(private service : StatistiquesService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
    console.log("data");
  }

  async getData() {
    const success = response => {
      if (response['code'] == 200) {
        this.stat = response['data'];
        console.log(this.stat);
      } else if(response['code'] == 403){
        this.router.navigate(['login'], {queryParams: {message: response['message']}});
      } else {
        this.message = response['message'];
      }
    }

    const error = response => {
      this.message = "Error";
    }
    this.service.getData(this.date).subscribe(success, error);
  }
  public chartType: string = 'line';

  chart() {


    // public chartDatasets: Array<any> = this.stat.y;
    // [
    //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
    //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' },
    //   { data: [38, 68, 10, 9, 106, 27, 60], label: 'My  dataset' }
    // ];

    // public chartLabels: Array<any> = this.stat.x;
    //  ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  }

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
