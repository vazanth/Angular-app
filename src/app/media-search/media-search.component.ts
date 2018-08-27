import {Component, OnInit} from '@angular/core';
import {ILanding} from './media-search';
import {MediaSearchService} from './media-search.service';


@Component({
  selector: 'pm-landing',
  templateUrl: './media-search.component.html',
  styleUrls: ['./media-search.component.css']
})

export class MediaSearchComponent implements OnInit {
  title: string = 'Dashboard';
  ButtonValue: string = 'Show All';
  searchBy: string = 'Search:';
  filterBy: string = 'FilterBy :';
  ImageWidth: number = 100;
  ImageMargin: number = 1;
 // filter: string = 'star';
  showImage: boolean = false;
  showAllVal: boolean = false;
  _listFilter: string;
  errorMessage: string;

  get listFilter(): string{
      return this._listFilter;
  }

  set listFilter(value: string){
      this._listFilter = value;
      this.filteredDetails = this.listFilter ? this.performFilter(this.listFilter) : this.details;
  }

   filteredDetails: ILanding[];
   details: ILanding[] = [];
   constructor(private _LandingService: MediaSearchService) {
    // this.filteredDetails = this.details;
    // this.listFilter = 'star';
  }

  ngOnInit(): void {
      this._LandingService.getDetails().subscribe(
        details => {this.details = details,
          this.filteredDetails = this.details},
        error => this.errorMessage = <any>error
      );
  }

  OnRatingop(message: string): void {
    this.title = message;
  }


  showAll(): void {
     this.filteredDetails = this.details;
     this.showAllVal = !this.showAllVal;
  }
  toggle(): void {
    this.showImage = !this.showImage;
  }



  performFilter(filteredVal: string): ILanding[] {
    filteredVal = filteredVal.toLocaleLowerCase();
    return this.details.filter((detail: ILanding) =>
        detail.Name.toLocaleLowerCase().indexOf(filteredVal) !== -1);
  }

 /* search(value): ILanding[]{
    value = value.toLocaleLowerCase();
    return this.details.filter((detail: ILanding) =>
      detail.Name.toLocaleLowerCase().indexOf(value) !== -1);
  }*/
}
