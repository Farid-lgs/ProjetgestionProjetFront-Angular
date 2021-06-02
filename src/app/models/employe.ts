import { Departement } from './departement';
import { Projet } from './projet';
import { Role } from './role';

export class Employe {
  idemploye?: number;
  prenom?: string;
  nom?: string;
  mail?: string;
  pwd?: string;
  departement?: Departement;
  projet?: Projet;
  role?: Role;
}
