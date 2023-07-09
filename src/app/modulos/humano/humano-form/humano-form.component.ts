import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-humano-form',
  templateUrl: './humano-form.component.html',
  styleUrls: ['./humano-form.component.css'],
  preserveWhitespaces: true
})
export class HumanoFormComponent implements OnInit {

  humanoForm = this.fb.group({
    id: [null, []],
    nome: [''],
    sobreNome: ['',[]],
    dataConstituicao: ['',[]],
    cpfCnpj: ['',[]],
    dataNascimento: ['',[]],
    foneResidencial: ['',[]],
    foneCelular: ['',[]],
    foneZap: ['',[]],
    cep: ['',[]],
    endereco: ['',[]],
    complemento: ['',[]],
    email: ['',[]],
    login: ['',[]],
    senha: ['',[]],
    role: ['',[]],
    tipo: ['',[]],
    status: ['',[]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
