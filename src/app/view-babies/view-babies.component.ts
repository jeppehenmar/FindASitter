import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-view-babies',
  templateUrl: './view-babies.component.html',
  styleUrls: ['./view-babies.component.scss']
})
export class ViewBabiesComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

}
