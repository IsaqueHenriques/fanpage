import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Usuario} from '../model/usuario';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UsuarioService {

  apiUsuarios = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {
  }

  cadastrarUsuario(usuario: Usuario) {
    return this.http.post(this.apiUsuarios, usuario);
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUsuarios);
  }

}
