import { Component, OnInit } from "@angular/core";
import { DvdService } from "../services/dvd.service";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: "app-dvd-detail",
  templateUrl: "./dvd-detail.component.html",
  styleUrls: ["./dvd-detail.component.css"]
})
export class DvdDetailComponent implements OnInit {
  selectedDvd: any;

  constructor(
    private dvd: DvdService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(dvdDetails => {
      
      this.dvd
        .getDetails(dvdDetails.id)
        .subscribe(oneDvd => {
          this.selectedDvd = oneDvd;
          sessionStorage.setItem("currentDVD", JSON.stringify(dvdDetails.id))
        });
    });
  }
}
