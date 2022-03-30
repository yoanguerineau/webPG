import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  public fullyInit = false;
  public resourcesFormGroup!: FormGroup;
  public resourceTypes = ['Vie', 'Endurance', 'Mana'];
  eventEmitter = new EventEmitter<FormGroup>();
  public isResourceSelected = new Array(this.resourceTypes.length);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    for(let i=0; i<this.isResourceSelected.length; i++) {
      this.isResourceSelected[i] = false;
    }
    this.resourcesFormGroup = this.fb.group({
    });
    this.updateForm(-1);

    this.fullyInit=true;
  }

  setIsResourceSelected(event: MatCheckboxChange, index: number) {
    this.isResourceSelected[index] = event.checked;
    this.updateForm(index);
  }

  isResourceTypeSelected(resource: string)  {
    return this.isResourceSelected[this.resourceTypes.indexOf(resource)];
  }

  updateForm(indexUpdated: number) {
    for(let i=0; i<this.resourceTypes.length; i++) {
      if(this.isResourceSelected[i]) {
        this.resourcesFormGroup.addControl(i.toString(), this.fb.group({
          value: new FormControl(),
          type: new FormControl(this.resourceTypes[i])
        }));
      } else if(indexUpdated == i) {
        this.resourcesFormGroup.removeControl(indexUpdated.toString());
      }
    }
  }
}
