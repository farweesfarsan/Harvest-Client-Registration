import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit{
  constructor(private route :ActivatedRoute) {

  }
  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
      console.log(params.get('id'))
    });
  }

}
