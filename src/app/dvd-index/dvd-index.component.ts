import { Component, OnInit } from '@angular/core';
import { DvdService } from "../services/dvd.service";

@Component({
  selector: 'app-dvd-index',
  templateUrl: './dvd-index.component.html',
  styleUrls: ['./dvd-index.component.css']
})
export class DvdIndexComponent implements OnInit {
  dvds: any;
  constructor(private dvd: DvdService) { }

  ngOnInit() {
    this.dvd.getList()
      .subscribe((dvds) => {
        this.dvds = dvds;
        console.log(this.dvds)
      });
  }

}
