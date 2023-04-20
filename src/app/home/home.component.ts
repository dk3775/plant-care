import { Component } from '@angular/core';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private plantService: PlantService) { }

  plants = this.plantService.getAllPlants();
}
