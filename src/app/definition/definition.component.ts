import { Component, OnInit ,NgZone} from '@angular/core';
import {Services} from '../services/services'
@Component({
  selector: 'definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css'],
  
})
export class DefinitionComponent implements OnInit {
    word = "default_val";
    defs;
    validstate;
  constructor(private services : Services ,private ngZone: NgZone) { }

  ngOnInit() {
   this.services.currentWord.subscribe(word => {
     this.defs = []
     
     if(word != 'default_val'){
      this.services.toggleValid(1)
      this.word = word
      this.services.getDef(word).then(response => {
      if(!response.ok){
       
        throw new Error("Invalid Word")
      }else{
        
        response.json().then(data =>{
          for(var i = 0; i<data["definitions"].length;i++){
            this.defs.push(data["definitions"][i]["definition"]+ " ("+data["definitions"][i]["partOfSpeech"] +")")
          }
         
        }).catch(err =>{
          if(word = ""){
            this.services.toggleValid(0) 
           }else{
             this.services.toggleValid(2)  
           }
        })
      }
      }).catch(err =>{
        if(word = ""){
         this.services.toggleValid(0) 
        }else{
          this.services.toggleValid(2)  
        }
       
      })
      
    }
    } );
    this.services.currentValidWord.subscribe(validstate => this.validstate = validstate)
  }
  isFirstWord(){
    
  return this.word == "default_val"
  }
}
