import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public maxDate: any;
  public currentYear = new Date().getFullYear();
  public currentMonth = new Date().getMonth();
  public currentDay = new Date().getDate();
  
  ngOnInit(): void {
    this.maxDate = new Date(this.currentYear - 18, this.currentMonth, this.currentDay);
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
