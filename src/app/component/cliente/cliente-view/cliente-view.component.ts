import { Component, OnInit, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';
import { AgGridAngular } from "ag-grid-angular";
import { ButtonRendererComponent } from './../../../button-renderer.component';



@Component({
  selector: 'app-cliente-view',
  templateUrl: './cliente-view.component.html',
  styleUrls: ['../../../app.component.css']
})
export class ClienteViewComponent implements OnInit {
  frameworkComponents: any;
  api: any;
  colunas = [
    { field: 'nome', editable: true  },
    { field: 'cpf', editable: true  },
    {
      headerName: 'Edit',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
      onClick: this.onEditButtonClick.bind(this),
      label: 'Edit'
      },
    },
    {
      headerName: 'Save',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
      onClick: this.onSaveButtonClick.bind(this),
      label: 'Save'
      },
    },
    {
      headerName: 'Delete',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
      onClick: this.onDeleteButtonClick.bind(this),
      label: 'Delete'
      },
    },

  ];

  linhas = [
      { nome: 'Arthur', cpf: '001' },
      { nome: 'Daniel', cpf: '002' },
      { nome: 'Kalila', cpf: '003'},
      { nome: 'Nilson', cpf: '004'},
      { nome: 'Reinaldo', cpf: '005'},
  ];

  constructor() { 
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
  }

  @ViewChild('agGrid') agGrid: AgGridAngular;

  onEditButtonClick(params)
{
 this.api.startEditingCell({
    rowIndex: params.rowIndex,
    colKey: 'nome'
  });
}

onSaveButtonClick(params)
{
 this.api.stopEditing();
}

onDeleteButtonClick(params)
{
//  debugger;
 this.api.updateRowData({remove: [params.data]});
}

onGridReady(params)
{
  this.api = params.api;
}

  ngOnInit(): void {
  }

}
