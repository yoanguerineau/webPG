import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  public fullyInit = false;
  public statisticsFormGroup!: FormGroup;
  public previousNbSkills = 0;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    let defaultValueNbSkills = this.previousNbSkills;
    this.statisticsFormGroup = this.fb.group({
      nbStatistics: new FormControl(defaultValueNbSkills, [ Validators.min(0)])
    });

    this.statisticsFormGroup.get("nbStatistics")?.valueChanges.subscribe(x => {
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
        this.statisticsFormGroup.removeControl((value+(i+1)).toString());
      }
    }
    
    for(let i=1; i<value+1; i++) {
      this.statisticsFormGroup.addControl(i.toString(), this.fb.group({
        name: new FormControl(),
        value: new FormControl()
      }));
    }
  }


}
