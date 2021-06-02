import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployesService } from '../service/employes/employes.service';
import { ModulesService } from '../service/modules/modules.service';

@Component({
  selector: 'app-details-projet',
  templateUrl: './details-projet.component.html',
  styleUrls: ['./details-projet.component.css']
})
export class DetailsProjetComponent implements OnInit {

  employes: any;
  modules: any;
  idprojet: any;

  constructor(public employeService: EmployesService,
              public moduleService: ModulesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.displayEmploye();
    this.displayModule();
  }

  displayEmploye() {

    this.idprojet = this.route.snapshot.paramMap.get('id');

    this.employes = this.employeService.findByProjet(this.idprojet).subscribe(
      (employes) => {
        this.employes = employes;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
  }

  displayModule() {

    this.idprojet = this.route.snapshot.paramMap.get('id');

    this.modules = this.moduleService.findByProjet(this.idprojet).subscribe(
      (modules) => {
        this.modules = modules;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
  }
}
