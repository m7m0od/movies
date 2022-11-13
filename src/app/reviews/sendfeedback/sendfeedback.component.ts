import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-sendfeedback',
  templateUrl: './sendfeedback.component.html',
  styleUrls: ['./sendfeedback.component.scss']
})
export class SendfeedbackComponent implements OnInit {

  constructor() { 

    
  
  
    $(".mm img").click(() =>{
      var SRC = $(this).attr("src");
      $(".pp img").attr("src",SRC);
    }) 
  
}

  
  
  

  
  




  ngOnInit(): void {
    
  }

}
