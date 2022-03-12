import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unknown-page',
  templateUrl: './unknown-page.component.html',
  styleUrls: ['./unknown-page.component.scss']
})
export class UnknownPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goto(page: string) {
    this.router.navigate([page]);
  }
}
