import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private plants: any[] = [];

  constructor() {
    // Load plants data from local storage
    const storedPlants = localStorage.getItem('plants');
    if (storedPlants) {
      this.plants = JSON.parse(storedPlants);
    }
  }

  // Get all plants
  getAllPlants(): any[] {
    console.log(this.plants);
    return this.plants;
  }

  // Add a new plant
  addPlant(plant: any): void {
    this.plants.push(plant);
    localStorage.setItem('plants', JSON.stringify(this.plants));
  }

  // Delete a plant
  deletePlant(name: string): void {
    this.plants = this.plants.filter(plant => plant.name !== name);
    localStorage.setItem('plants', JSON.stringify(this.plants));
  }
}
