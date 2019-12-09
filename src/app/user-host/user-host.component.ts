import { Component, Input, Host } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-user-host',
  templateUrl: './user-host.component.html',
  styleUrls: ['./user-host.component.scss']
})
export class UserHostComponent {

  @Input('data') user: any

  constructor(
    @Host() private _app: AppComponent

  ) { 
    console.log(this._app);  
  }

  borrarUsuarioHost(id: number){
    this._app.usuarios = this._app.usuarios.filter(usuario => usuario.id != id)
  }
 

}
