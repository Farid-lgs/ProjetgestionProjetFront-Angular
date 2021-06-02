import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployesComponent } from './component/employes/employes.component';
import { ProjetsComponent } from './component/projets/projets.component';
import { DepartementsComponent } from './component/departements/departements.component';
import { LoginComponent } from './component/login/login.component';
import { MenuComponent } from './component/menu/menu.component';
import { UpdateDepartementComponent } from './component/departements/update/update-departement/update-departement.component';
import { AddProjetComponent } from './component/projets/add/add-projet/add-projet.component';
import { UpdateProjetComponent } from './component/projets/update/update-projet/update-projet.component';
import { AddEmployeComponent } from './component/employes/add/add-employe/add-employe.component';
import { UpdateEmployeComponent } from './component/employes/update/update-employe/update-employe.component';
import { AddDepartementComponent } from './component/departements/add/add-departement/add-departement.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsModuleComponent } from './details-module/details-module.component';
import { DetailsProjetComponent } from './details-projet/details-projet.component';
import { UpdateTacheComponent } from './component/taches/update-tache/update-tache.component';
import { AddModuleComponent } from './component/modules/add-module/add-module.component';
import { AddTacheComponent } from './component/taches/add-tache/add-tache.component';
import { UpdateModuleComponent } from './component/modules/update-module/update-module.component';
import { RegisterComponent } from './component/register/register.component';
import { ProfileComponent } from './component/profile/profile.component';
import { BoardAdminComponent } from './component/board-admin/board-admin.component';
import { BoardModeratorComponent } from './component/board-moderator/board-moderator.component';
import { BoardUserComponent } from './component/board-user/board-user.component';
import { HomeComponent } from './component/home/home.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    EmployesComponent,
    ProjetsComponent,
    DepartementsComponent,
    LoginComponent,
    MenuComponent,
    AddDepartementComponent,
    UpdateDepartementComponent,
    AddProjetComponent,
    UpdateProjetComponent,
    AddEmployeComponent,
    UpdateEmployeComponent,
    DetailsModuleComponent,
    DetailsProjetComponent,
    UpdateTacheComponent,
    AddTacheComponent,
    AddModuleComponent,
    UpdateModuleComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
