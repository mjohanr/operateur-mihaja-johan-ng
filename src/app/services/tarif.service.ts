import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base_url, Tarif } from 'src/environments/environment';
import { ToolsService } from './tools.service';

@Injectable({
  providedIn: 'root'
})
export class TarifService {

  constructor(private http : HttpClient, private toolsServ : ToolsService) { }

  getData() {
    const options = this.toolsServ.formOption(true, localStorage.getItem('token'));
    return this.http.get(base_url + 'tarifs', options);
  }

  update(input) {
    const options = this.toolsServ.formOption(true, localStorage.getItem('token'));
    return this.http.put(base_url + 'tarifs/modifier', input, options);
  }

  getById(id)  {
    const options = this.toolsServ.formOption(true, localStorage.getItem('token'));
    return this.http.get(base_url + 'tarif/' + id, options);
  }
}
