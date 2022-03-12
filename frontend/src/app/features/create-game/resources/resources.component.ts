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
    this.updateForm();

    this.fullyInit=true;
  }

  setIsResourceSelected(event: MatCheckboxChange, resourceType: string) {
    this.isResourceSelected[this.resourceTypes.indexOf(resourceType)] = event.checked;
    let subForm = this.resourcesFormGroup.get(this.resourceTypes.indexOf(resourceType).toString());
    subForm?.get('value')?.setValue(null);
  }

  isResourceTypeSelected(resource: string)  {
    return this.isResourceSelected[this.resourceTypes.indexOf(resource)];
  }

  updateForm() {
    for(let i=0; i<this.resourceTypes.length; i++) {
      if(this.resourceTypes[i]) {
        this.resourcesFormGroup.addControl(i.toString(), this.fb.group({
          value: new FormControl(),
          type: new FormControl(this.resourceTypes[i])
        }));
      }
    }
  }

}
