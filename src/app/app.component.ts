import { Component,OnInit,Output,ViewChild,AfterViewInit} from '@angular/core';
import {Quizmodel} from "./quize"
import{QuestionComponent} from "./question/question.component"
import { EventEmitter } from 'events';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit{

 
 @ViewChild(QuestionComponent) child;

 constructor() { }
 check : any;
 getid : any;
 message:string;

 ngAfterViewInit() {
   this.message = this.child.message
 }
 next(){
   this.check = this.child.Questionlist.length;
   for(let c = 0; c< this.child.Questionlist.length; c++){
     this.getid = this.child.Questionlist[c]['ID'];
   }
   

if(this.child.id < this.getid){
  this.child.id++;
}else{
alert("finish");
}
         for(let k = 0;k<this.child.Questionlist.length;k++){
               if(this.child.id==this.child.Questionlist[k]['ID']){
                 this.child.question=this.child.Questionlist[k]['Question'];
                 this.child.answerTest=this.child.Questionlist[k]['answerlist']
               }

 }


}
previous(){
  this.check = this.child.Questionlist.length;
  for(let c = 0; c< this.child.Questionlist.length; c++){
    this.getid = this.child.Questionlist[0]['ID'];
  }
  

if(this.child.id >this.getid){
 --this.child.id;
}else{
alert("finish");
}
        for(let k = 0;k<this.child.Questionlist.length-1;k++){
              if(this.child.id==this.child.Questionlist[k]['ID']){
                this.child.question=this.child.Questionlist[k]['Question'];
                this.child.answerTest=this.child.Questionlist[k]['answerlist']
              }

}

}






}