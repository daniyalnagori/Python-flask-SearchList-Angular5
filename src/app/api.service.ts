import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class ApiService {
    constructor(private http: Http) { }

    allData() {
        console.log('dsadsd')
       return this.http.get('http://127.0.0.1:5000/lang')
    }

    getData(data) {
        console.log('dsadsd')
       return this.http.get(`http://127.0.0.1:5000/lang/${data}`)
    }
}