import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thor',
  templateUrl: './thor.page.html',
  styleUrls: ['./thor.page.scss'],
})
export class ThorPage  {
  imageURL
  play;
  constructor() {
    this.startTimer();
  }

  segundo: number = 0;
  minuto: number = 0;
  hora: string ="00:00:00";
  interval;
  
  startTimer() {
   
    this.play = true;
    this.interval = setInterval(() => {
      this.segundo++;   
      if (this.minuto==0){
        this.hora="00:"+this.minuto.toString() + '0:0'+this.segundo.toString(); 
      }
      else {
        if (this.segundo<10)
           this.hora="00:"+ "0"+this.minuto.toString()+":0"+this.segundo.toString();
      }       

      if (this.segundo>=10){
        this.hora="00:00:"+this.segundo.toString();
      }
      if (this.segundo==60){
        this.segundo=0;
        this.minuto++
        this.hora="00:"+ "0"+this.minuto.toString()+":0"+this.segundo.toString();
        
      }
    },1000)
  }
  
  pauseTimer() {
    this.play = false;
    clearInterval(this.interval);
  }
}