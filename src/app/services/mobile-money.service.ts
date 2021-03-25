import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base_url } from 'src/environments/environment';
import { ToolsService } from './tools.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class MobileMoneyService {

  constructor(private http : HttpClient, private toolsServ : ToolsService, private loginServ: LoginService) { }
  

  getData() {
  	const options = this.toolsServ.formOption(true, localStorage.getItem('token'));
    return this.http.get(base_url + 'mobilemoney', options);
  }

  update(input) {
  	const options = this.toolsServ.formOption(true, localStorage.getItem('token'));
    return this.http.put(base_url + 'mobilemoney/update', input, options);
  }
}

