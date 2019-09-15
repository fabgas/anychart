import { Injectable } from '@angular/core';
import {CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridType} from 'angular-gridster2';
import { UUID } from 'angular2-uuid';
@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public options: GridsterConfig = {
    gridType: GridType.Fit,
    compactType: CompactType.None,
    maxCols: 10,
    pushItems: true,
    draggable: {
      enabled: true
    },
    resizable: {
      enabled: true
    }
  };
  public layout: GridsterItem[] = [];
  constructor() { }

  addItem(): void {
    this.layout.push({
      cols: 1,
      id: UUID.UUID(),
      rows: 1,
      x: 0,
      y: 0
    });
    
  }
  deleteItem(id: string): void {
    const item = this.layout.find(d => d.id === id);
    this.layout.splice(this.layout.indexOf(item), 1);
  }
}