import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TachesService } from '../service/taches/taches.service';

@Component({
  selector: 'app-details-module',
  templateUrl: './details-module.component.html',
  styleUrls: ['./details-module.component.css']
})
export class DetailsModuleComponent implements OnInit {

  taches: any;

  constructor(public tacheService: TachesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.displayTache();
  }

  displayTache() {


    const id = this.route.snapshot.paramMap.get('idModule');

    this.taches = this.tacheService.findByModule(id).subscribe(
      (taches) => {
        this.taches = taches;
      },
      (error) => {
        console.log('error = ' + error.message);
      }
    );
  }
}
