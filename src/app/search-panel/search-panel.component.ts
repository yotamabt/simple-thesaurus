import { Component, OnInit ,OnChanges} from '@angular/core';
import {Services} from '../services/services'

@Component({
  selector: 'search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css'],
  
})
export class SearchPanelComponent implements OnInit {

  constructor(private services: Services) { }
 word;


 onSubmit(){

  this.services.setWord(this.word)
 
}
  ngOnInit() {
    
  }

}
