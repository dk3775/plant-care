import { Component, OnInit } from '@angular/core';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-admin-manage',
  templateUrl: './admin-manage.component.html',
  styleUrls: ['./admin-manage.component.css']
})
export class AdminManageComponent implements OnInit {

  plants: any[] = [];
  pname: string = '';
  purl: string = '';
  ptype: string = '';
  pwateringReq: string = '';
  psunReq: string = '';
  constructor(private plantService: PlantService) { }

  ngOnInit(): void {
    console.log("hi");
    this.plants = this.plantService.getAllPlants();
  }
  add() {
    const plant = {
      name: this.pname,
      image: this.purl,
      type: this.ptype,
      waterReq: this.pwateringReq,
      sunlightReq: this.psunReq
    }
    this.plantService.addPlant(plant);
    this.pname = '';
    this.purl = '';
    this.ptype = '';
    this.pwateringReq = '';
    this.psunReq = '';
    this.plants = this.plantService.getAllPlants();
    // console.log(plant);
  }

  delete(plant: any) {
    this.plantService.deletePlant(plant.name);
    this.plants = this.plantService.getAllPlants();
  }

  clearLocalStorage() {
    localStorage.removeItem('plants');
    this.plants = []; // update the component's plants array to reflect the changes
  }


}
