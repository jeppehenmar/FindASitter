import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-view-sitters',
  templateUrl: './view-sitters.component.html',
  styleUrls: ['./view-sitters.component.scss']
})
export class ViewSittersComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

}
