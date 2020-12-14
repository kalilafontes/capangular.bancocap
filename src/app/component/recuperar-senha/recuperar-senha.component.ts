import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['../../app.component.css']
})
export class RecuperarSenhaComponent implements OnInit {


  constructor() { }

  onEnviarSenha(formSenha: NgForm){
    console.log(formSenha.value);
  }

  ngOnInit(): void {
  }

}
