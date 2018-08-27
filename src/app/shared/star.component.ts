import {Component, Input, OnChanges, Output, EventEmitter, Pipe} from '@angular/core';

@Component({
  selector: '<pm-star></pm-star>',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})


export class StarComponent implements OnChanges {
  starWidth: number;
  Arr = Array;
  @Input() rating: number;
  @Output() ratingOp: EventEmitter<string> = new EventEmitter<string>();
  ngOnChanges(): void {
   // this.starWidth = this.rating * 182 / 10;
  }

  OnClick(): void {
    this.ratingOp.emit('Rating Value:' + this.rating);
  }
}
