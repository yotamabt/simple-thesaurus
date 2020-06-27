import { Component ,OnInit} from '@angular/core';
import{Services} from './services/services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private services: Services) { }
  title = 'Thesurus';
  word;

  onInit(){
    this.services.currentWord.subscribe(word => {
      this.word = word;
      console.log(word)
    });
  }
}
