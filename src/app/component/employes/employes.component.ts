import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployesService } from 'src/app/service/employes/employes.service';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {

  employes: any;

  constructor(public employeService: EmployesService,
              private router: Router) {
      this.displayEmploye();
     }

  ngOnInit(): void {
  }

  displayEmploye() {
    this.employes = this.employeService.findAll().subscribe(
      (employes) => {
        this.employes = employes;
      },
      (error) => {
        console.log('error=' + error.message);
      }
    );
  }

  onRemoveEmploye(id: number) {
    this.employeService.remove(id);

    setTimeout(
      () => {
        this.displayEmploye();
      }, 1000);
  }
  updateEmploye(id: number){
    this.router.navigate(['/employe/update', id]);
  }
}
