import { Component, OnInit, Input } from '@angular/core';
import {Observable,Observer} from 'rxjs';

@Component({
  selector: 'app-refresh-date',
  templateUrl: './refresh-date.component.html',
  styleUrls: ['./refresh-date.component.scss']
})
export class RefreshDateComponent implements OnInit {
  time:Observable<string>;
  @Input() timeInterval: number;
  constructor() { }

  ngOnInit(): void {
    this.time = new Observable<string>((observer: Observer<string>) => {
      setInterval(() => observer.next(new Date().toString()), this.timeInterval);
    });
  }

}
