import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/environments/environment';
import { LoginService } from '../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	identifiant: string = "root";
	mdp: string = "root";
	message: string;

  constructor(private service: LoginService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.message = params['message'];
    })
  }

  ngOnInit(): void {
  }

  login() {
  	const input = {
  		identifiant: this.identifiant,
  		mdp: this.mdp
  	};
  	const success = response => {
      if (response['code'] == 200) {
        localStorage.setItem('token', response['data']['token']);
        this.message = response['message'];
        this.router.navigate(['validationDepot']);
      } else {
        this.message = response['message'];
      }
    }

    const error = response => {
      this.message = response['message'];
    }

    this.service.login(input).subscribe(success, error);

  }

}
