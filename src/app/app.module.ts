import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ButtonRendererComponent } from './button-renderer.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './component/cliente/cliente.component';
import { LoginComponent } from './component/login/login.component';
import { ContaComponent } from './component/conta/conta.component';
import { RecuperarSenhaComponent } from './component/recuperar-senha/recuperar-senha.component';
import { HomeComponent } from './component/home/home.component';
import { CPFPipe } from './cpf.pipe';
import { ClienteViewComponent } from './component/cliente/cliente-view/cliente-view.component';
import { ContaViewComponent } from './component/conta/conta-view/conta-view.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent, ButtonRendererComponent,
    ClienteComponent,
    LoginComponent,
    ContaComponent,
    RecuperarSenhaComponent,
    HomeComponent,
    CPFPipe,
    ClienteViewComponent,
    ContaViewComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfig),
    AgGridModule.withComponents([ButtonRendererComponent]),
    BrowserAnimationsModule,
   /*  MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule */
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
