import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base_url } from 'src/environments/environment';
import { ToolsService } from './tools.service';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {

  constructor(private http : HttpClient, private toolsServ : ToolsService) { }

  getData(input) {
    const options = this.toolsServ.formOption(true, localStorage.getItem('token'));
    return this.http.get(base_url + 'stat/'+ input, options);
  }
}
