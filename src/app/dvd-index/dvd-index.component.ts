import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DvdService } from "../services/dvd.service";
import {PaginationInstance} from 'ngx-pagination';

@Component({
  selector: 'app-dvd-index',
  templateUrl: './dvd-index.component.html',
  styleUrls: ['./dvd-index.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DvdIndexComponent implements OnInit {
  _isOpen: boolean = true;
  dvds: any;
  currentDvdType: string = "";
  

  public filter: string = '';
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = true;
  public config: PaginationInstance = {
      id: 'advanced',
      itemsPerPage: 10,
      currentPage: 1
  };
  public labels: any = {
    previousLabel: 'Previous',
    nextLabel: 'Next',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
};

  constructor(private dvd: DvdService) { }

  ngOnInit() {
    this.dvd.getList()
      .subscribe((dvds) => {
        this.dvds = dvds;
      });

  }

  onPageChange(number: number):void {
    this.config.currentPage = number;
    this.currentDvdType =""
  }

  setItemsPerPage(numberOfItems: number):void{
    this.config.itemsPerPage = numberOfItems;
    this.currentDvdType =""
  }

  firstTime(type:string):boolean{
    if (this.currentDvdType === type){
      return false;
    }
    this.currentDvdType = type;
    return true;
  }

  formatWithDate(type:string):boolean{
    if (type === "Compilation" || type === "Documentary"){
      return false
    }
    return true
  }

  closeAllVersions(): void{
    this.dvds.forEach((dvd)=>{
      dvd.isOpen = false;
      this.currentDvdType = "";
    })
  }

  showVersions(dvd){
    if(!dvd.isOpen){
      this.closeAllVersions();
    }
    dvd.isOpen = !dvd.isOpen;
    this.currentDvdType = "";
  }
}
