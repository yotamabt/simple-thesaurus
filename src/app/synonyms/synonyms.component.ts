import { Component, OnInit ,OnChanges} from '@angular/core';
import {Services} from '../services/services'



@Component({
  selector: 'synonyms',
  templateUrl: './synonyms.component.html',
  styleUrls: ['./synonyms.component.css']
})
export class SynonymsComponent implements OnInit {

  constructor(private services : Services) { }
  synStringList = []
  finalSynList = []
  validstate;
  ngOnInit() {
    this.services.currentWord.subscribe(word =>{
      this.synStringList = []
      this.finalSynList = []
      if(word != 'default_val'){
        this.services.getSynonyms(word).then(response => {
          if(!response.ok){
            
            throw new Error("Invalid Word")
            
          }else{
          response.json().then(data => {
            this.synStringList = data.synonyms
          }).then(() =>{
            for(var i = 0 ;i< this.synStringList.length;i++){
              this.services.getDef(this.synStringList[i]).then(res =>{
                res.json().then(defdata => {
                  this.finalSynList.push({
                    syn: defdata["word"],
                    def:defdata["definitions"][0]["definition"],
                    type: defdata["definitions"][0]["partOfSpeech"]
                  })
                })
              })
            }
          })
        }
        }).catch(err => {
         
          if(word = ""){
            this.services.toggleValid(0) 
           }else{
             this.services.toggleValid(2)  
           }
           
        });
      }
     
    });
    this.services.currentValidWord.subscribe(validstate => this.validstate = validstate)
    
  }


}
