import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { DefinitionComponent } from './definition/definition.component';
import { SynonymsComponent } from './synonyms/synonyms.component';
import {Services} from './services/services'

@NgModule({
  declarations: [
    AppComponent,
    SearchPanelComponent,
    DefinitionComponent,
    SynonymsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [Services],
  bootstrap: [AppComponent]
})
export class AppModule { }
