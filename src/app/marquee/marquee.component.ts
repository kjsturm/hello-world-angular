import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-marquee',
  template: `
  <div>
  <marquee direction="left" scrolldelay="80" behavior="loop">ControlPointWeb scroll</marquee>
  </div>`,
  styles: [`
    div{
      padding: 0px;
      width:calc(100% - 6px);
      line-height: 3.5vh;
      font-size: 3.5vh;
    }
  `]
  // templateUrl: './marquee.component.html',
  // styleUrls: ['./marquee.component.css']
})
export class MarqueeComponent implements OnInit { 

  constructor() { }

  ngOnInit(): void {
  }

}
