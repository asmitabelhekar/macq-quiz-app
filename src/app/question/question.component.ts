import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Quizmodel } from '../quize';

@Component({
  selector: 'app-child',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  message = 'Hola Mundo!';
id:number;
myarray:any;
question : any;
answerTest : any;

i:number=0;
 Questionlist=[{
  "ID":1, "Question":"What is Java","answerlist":["Nayan.c", "Ärmesh", "Denish Richie", "Kiran.DY"], "answer": "Denish Richie"
},
{
  "ID":2, "Question":"What is C","answerlist":["Nayan.c", "Ramesh", "Denish Richie", "Kiran.DY"], "answer": "Denish Richie"
}

];



  constructor() {}

  ngOnInit(): void {
    for( var i=0;i<=this.Questionlist.length;i++){
      
     this.myarray=this.Questionlist[0];
     this.id=this.myarray['ID'];
    //  this.i=0;
     this.question=this.myarray['Question'];
     this.answerTest=this.myarray['answerlist']
      
    }
   }


}
