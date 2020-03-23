import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html', //reference external file versus embedded
  template: `
            <div [style.color]="highlightColor" [style.font-size]="'1.4em'">{{greetUser()}}</div>           

            <h2  [style.font-size]="'1.2em'">{{"hello " + parentData}}

            <button (click)="fireEvent()">Send Event</button>

            </h2>  <!-- {{"hello " + parentName}}-->
           
            <!--
            <input type ="text" value="ControlPoint">
                      
            <input class ="inputLeftOffset" [disabled] ="isDisabled"  type ="text" value="ControlPoint">
            
            <input class ="inputLeftOffset" bind-disabled ="isDisabled" [id]="myId" type ="text" value="ControlPoint">

            <br/>
            -->

            <!--inline ngswitch template directive-->
            <div [ngSwitch]="color"  [style.font-size]="'.9em'">
            <div *ngSwitchCase="'red'" [style.color]="'red'">Red</div>
            <div *ngSwitchCase="'green'"  [style.color]="'green'">Green</div>
            <div *ngSwitchCase="'blue'" [style.color]="'blue'">Blue</div>
            <div *ngSwitchDefault [style.color]="'black'">default</div>
            </div>

            <!--inline ngif template directive-->
            <div *ngIf="displayElement; then thenBlock; else elseBlock" > </div>
             
            <ng-template #thenBlock  [style.font-size]="'.9em'">
             <h2 class="text-success" >{{siteUrl}}</h2>
             <h2 [class]="successClass" >{{siteUrl}}</h2>
             <h2 [class]="successClass" >{{siteUrl}}</h2>
             <h2 [class.text-danger]="hasError" >{{siteUrl}}</h2>
             <h2 [ngClass]="messageClasses" >{{siteUrl}}</h2>
             <h2 [style.color]="'orange'">{{siteUrl}}</h2>
             <h2 [style.color]="hasError ? 'red' : 'green'">{{siteUrl}}</h2>
             <h2 [ngStyle]="titleStyles">{{urlFile}}</h2>
            </ng-template>
             
            <ng-template #elseBlock  [style.font-size]="'.9em'" >
             <h2 \>
             site url is hidden
             </h2>
            </ng-template>              
             
             
             <button (click) = onClick($event)>Greeting</button>
             {{greeting}}
             <input #guest type="text" value="aguest">
             <button (click)="logMessage(guest)">Log</button>
             <div  [style.font-size]="'.9em'">Form App Component</div>
             <input type="text" [(ngModel)]="name" >{{name}}

             <br/><br/>
            
            <div [style.text-align]="'left'" 
                 [style.font-size]="'.7em'"
                 [style.font-weight]="'400'" 
                 [style.padding]="'0px 0px 0px 100px'" 
                 *ngFor="let color of colors; index as i; first as f; last as l; odd as o">

            <div *ngIf="o; then evenBlock; else oddBlock"> </div>

            <ng-template #oddBlock>
            <div [style.color] = color>{{i}} {{color}} is odd</div>
            </ng-template>

            <ng-template #evenBlock>
            <div [style.color] = color>{{i}} {{color}} is even</div>
            </ng-template>
            
            <ng-template #firstBlock></ng-template>
            
            <ng-template #lastBlock></ng-template>
            
            <ng-template #elseBlock>
            <div>{{i}} {{color}} is odd</div>
            </ng-template>

            <!--<div [style.color]="'blue'" >{{i}} is odd:{{o}} is first:{{f}} is last:{{l}} {{color}}</div>-->
            </div>
              `,

  // styleUrls: ['./test.component.css'] //ref extern file v embedded
  styles: [`
    *{
      vertical-align: middle;
      line-height: auto;     
    }   
    h2 {
      font-size: .9em;
    }
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }

    .text-special {
      font-style: italic;
    }
    div {
      // background-color: darkblue  ;
      color: red;
      font-size: 1.75em;
    }
    .inputLeftOffset{
      margin-left: 30px
    } 
    `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public parentData;

  // @Input('parentData') public parentName;

  @Output() public childEvent = new EventEmitter();  

  public appName = "ControlPointWeb App ver 1.0.0";

  public name = "";

  public siteUrl = "site url " + window.location.href;

  public urlFile = "url file " + window.location;

  public myId = "testId";

  public color = "green";

  public colors = ["red", "green", "blue", "magenta"];

  public displayElement = false;

  public isDisabled = false;

  public isOdd = false;

  public successClass = "text-success";

  public hasError = false;

  public isSpecial = true;

  public highlightColor = "hotpink";

  public greeting = "";

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public titleStyles = {
    color: "darkblue",
    fontStyle: "italic"
  }

  greetUser() {
    return "Introducing  " + this.appName;
  }

  onClick(e) {
    console.log(e);

    this.greeting = e.type + ' Welcome to ControlPointWeb';
  }

  logMessage(x) {
    console.log('log guest ' + x.value)
  }

  fireEvent() {
    var dt = new Date();
    console.log('fireEvent');
    this.childEvent.emit(dt.toLocaleTimeString() + ' bonjour ControlPointWeb');
  }  
}


