import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base_url, Forfait } from 'src/environments/environment';
import { ToolsService } from './tools.service';

@Injectable({
  providedIn: 'root'
})
export class OffresService {

  constructor(private http : HttpClient, private toolsServ : ToolsService) { }

  getData() {
    const options = this.toolsServ.formOption(true, localStorage.getItem('token'));
    return this.http.get(base_url + 'offres', options);
  }

  getById(id) {
    const options = this.toolsServ.formOption(true, localStorage.getItem('token'));
    return this.http.get(base_url + 'offres/' + id, options);
  }

  update(input) {
    const options = this.toolsServ.formOption(true, localStorage.getItem('token'));
    return this.http.put(base_url + 'offres/modifier', input, options);
  }

  isIn(type: string, forfaits : Forfait[]) {
  for (let index = 0; index < forfaits.length; index++) {
     const forfait = forfaits[index];
     if (forfait.produit == type) {
       return true;
    }
  }
    return false;
  }

  create(input) {
    const options = this.toolsServ.formOption(true, localStorage.getItem('token')); // headers
    return this.http.post(base_url + 'offres/creer', input, options);
  }

  delete(id) {
    const options = this.toolsServ.formOption(true, localStorage.getItem('token'));
    return this.http.delete(base_url + 'offres/supprimer/' +id , options);
  }
}
