import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['../../app.component.css']
})
export class ClienteComponent implements OnInit {
  cliente:Cliente = {};
  error:boolean = false;
  errorDesc:string = "";

  constructor(private router: Router) { }

  onCadastrar(){
    console.log(this.cliente.cpf);
    var valido = this.validarCpf(this.cliente.cpf);
    console.log(valido);
    if (!this.cliente.nome) {
      this.error = true;      
      this.errorDesc = "Preencha o campo nome"
    } else if (!this.cliente.cpf) {
      this.error = true;      
      this.errorDesc = "Insira o CPF"
    } else if (!valido) {
      this.error = true;      
      this.errorDesc = "Insira um CPF válido"
    } else {
      this.error = false;
      this.router.navigate(['/perfil']);
    }
  }
   
  
  validarCpf(cpf: string) {
    if (cpf == null) {
      return false;
  }
  if (cpf.length != 11) {
      return false;
  }
  if ((cpf == '00000000000') || 
      (cpf == '11111111111') || 
      (cpf == '22222222222') || 
      (cpf == '33333333333') || 
      (cpf == '44444444444') || 
      (cpf == '55555555555') || 
      (cpf == '66666666666') || 
      (cpf == '77777777777') || 
      (cpf == '88888888888') || 
      (cpf == '99999999999')) {
      return false;
  }
  let numero: number = 0;
  let caracter: string = '';
  let numeros: string = '0123456789';
  let j: number = 10;
  let somatorio: number = 0;
  let resto: number = 0;
  let digito1: number = 0;
  let digito2: number = 0;
  let cpfAux: string = '';
  cpfAux = cpf.substring(0, 9);
  for (let i: number = 0; i < 9; i++) {
      caracter = cpfAux.charAt(i);
      if (numeros.search(caracter) == -1) {
          return false;
      }
      numero = Number(caracter);
      somatorio = somatorio + (numero * j);
      j--;
  }
  resto = somatorio % 11;
  digito1 = 11 - resto;
  if (digito1 > 9) {
      digito1 = 0;
  }
  j = 11;
  somatorio = 0;
  cpfAux = cpfAux + digito1;
  for (let i: number = 0; i < 10; i++) {
      caracter = cpfAux.charAt(i);
      numero = Number(caracter);
      somatorio = somatorio + (numero * j);
      j--;
  }
  resto = somatorio % 11;
  digito2 = 11 - resto;
  if (digito2 > 9) {
      digito2 = 0;
  }
  cpfAux = cpfAux + digito2;
  if (cpf != cpfAux) {
      return false;
  }
  else {
      return true;
  }
}
    
  ngOnInit(): void {
  }

}
