import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss']
})
export class MoneyComponent implements OnInit {

  public fullyInit = false;
  public moneyFormGroup!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.moneyFormGroup = this.fb.group({
      name: new FormControl(),
      value: new FormControl(0, [ Validators.min(0)]),
      symbol: new FormControl()
    });
    this.fullyInit=true;
  }

}
