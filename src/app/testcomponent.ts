import { Component,Input} from '@angular/core';
// import{AppComponent} from "../app.component"
@Component({
  selector: 'child-comp',
  template: `
  <div>
  {{"Hello" +parentCount}}
  </div>`
})
export class QuestionsComponent{

//   @Input() public parentCount:number;
//  @Input() public parentData;

 @Input() public parentCount:number;

}
