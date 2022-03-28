import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public fullyInit = false;
  public skillsFormGroup!: FormGroup;
  public previousNbSkills = 0;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    let defaultValueNbSkills = this.previousNbSkills;
    this.skillsFormGroup = this.fb.group({
      nbSkills: new FormControl(defaultValueNbSkills, [ Validators.min(0)])
    });

    this.skillsFormGroup.get("nbSkills")?.valueChanges.subscribe(x => {
      this.updateForm(x);
      this.previousNbSkills = x;
    });

    this.fullyInit=true;
  }

  createNumberArray(size: number): number[] {
    return Array(size).fill(undefined).map((x,i) => (i+1));
  }

  updateForm(value: number) {
    let delta = value-this.previousNbSkills;
    if(delta < 0) {
      for(let i=0; i<Math.abs(delta); i++) {
        this.skillsFormGroup.removeControl((value+(i+1)).toString());
      }
    }
    
    for(let i=1; i<value+1; i++) {
      this.skillsFormGroup.addControl(i.toString(), this.fb.group({
        name: new FormControl(),
        description: new FormControl(),
        mainStat: new FormControl()
      }));
    }
  }

}
