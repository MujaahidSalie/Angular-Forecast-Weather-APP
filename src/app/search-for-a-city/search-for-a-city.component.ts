import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-search-for-a-city',
  templateUrl: './search-for-a-city.component.html',
  styleUrls: ['./search-for-a-city.component.css']
})
export class SearchForACityComponent implements OnInit {


  city: string;
  code: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  saveForm() {
    const location = {
      city: this.city,
      state: this.code
    };
    localStorage.setItem('location', JSON.stringify(location));
    this.router.navigate(['home']);
    alert('Click View City Weather');
  }
}
