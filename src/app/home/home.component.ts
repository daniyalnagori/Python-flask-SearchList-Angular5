import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contactList = [];
  myForm: FormGroup;
  dataArr = [];
  searchRes;
  searchNotFound: String;
  constructor(private apiService: ApiService, private fb: FormBuilder) {
    // Calling Api Service
    this.myForm = fb.group({
      'name': ['', Validators.required],
    })

    // Calling Api for data
    this.apiService.allData()
      .subscribe((data) => {
        console.log(data.json().lang);
        this.dataArr = data.json().lang;
      })
  }

  onSubmit(value) {
    this.apiService.getData(value.name).subscribe((data) => {
      console.log(data.json());
      if(data.json()['lang']['name']){
        console.log('=====')  
        this.searchRes = data.json()['lang']['name'];
      }
      else{

        this.searchRes = 'sorry'
      }
    })
  }

  ngOnInit() {
  }
}