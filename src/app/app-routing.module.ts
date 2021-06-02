import { LoginComponent } from './component/login/login.component';
import { DepartementsComponent } from './component/departements/departements.component';
import { ProjetsComponent } from './component/projets/projets.component';
import { EmployesComponent } from './component/employes/employes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartementComponent } from './component/departements/add/add-departement/add-departement.component';
import { UpdateDepartementComponent } from './component/departements/update/update-departement/update-departement.component';
import { AddProjetComponent } from './component/projets/add/add-projet/add-projet.component';
import { UpdateProjetComponent } from './component/projets/update/update-projet/update-projet.component';
import { AddEmployeComponent } from './component/employes/add/add-employe/add-employe.component';
import { UpdateEmployeComponent } from './component/employes/update/update-employe/update-employe.component';
import { DetailsProjetComponent } from './details-projet/details-projet.component';
import { DetailsModuleComponent } from './details-module/details-module.component';
import { UpdateTacheComponent } from './component/taches/update-tache/update-tache.component';
import { AddModuleComponent } from './component/modules/add-module/add-module.component';
import { AddTacheComponent } from './component/taches/add-tache/add-tache.component';
import { HomeComponent } from './component/home/home.component';
import { BoardAdminComponent } from './component/board-admin/board-admin.component';
import { BoardModeratorComponent } from './component/board-moderator/board-moderator.component';
import { BoardUserComponent } from './component/board-user/board-user.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  { path: 'employe/list', component: EmployesComponent},
  { path: 'employe/add', component: AddEmployeComponent},
  { path: 'employe/update/:id', component: UpdateEmployeComponent},
  { path: 'projet/list', component: ProjetsComponent},
  { path: 'projet/add', component: AddProjetComponent},
  { path: 'projet/update/:id', component: UpdateProjetComponent},
  { path: 'projet/:id', component: DetailsProjetComponent},
  { path: 'projet/:id/module/:idModule', component: DetailsModuleComponent},
  { path: 'projet/:id/module/:idModule/tache/update/:idTache', component: UpdateTacheComponent},
  { path: 'projet/:id/module/update/:idModule', component: UpdateEmployeComponent},
  { path: 'departement/list', component: DepartementsComponent},
  { path: 'departement/add', component: AddDepartementComponent},
  { path: 'departement/update/:id', component: UpdateDepartementComponent},
  { path: 'module/add', component: AddModuleComponent},
  { path: 'tache/add', component: AddTacheComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
