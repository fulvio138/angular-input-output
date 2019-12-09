import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  @Input('data') user: any

  @Output() borrar = new EventEmitter<number>()

  constructor(
  ) { 
  }
  
  borrarUsuario(id: number){
    this.borrar.emit(id)
  }

  

}
