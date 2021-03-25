import { Injectable } from '@angular/core'
import { base_url, Admin } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ToolsService } from './tools.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient, private toolsServ : ToolsService) { }

  login(input) {
  	const options = this.toolsServ.formOption();
  	localStorage.setItem('token', '');
  	return this.http.post(base_url + 'admin/login', input, options);
  }
}
