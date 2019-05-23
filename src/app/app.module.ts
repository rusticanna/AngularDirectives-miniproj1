import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextFormatChangeDirective } from './text-format-change.directive';
import { StudentComponent } from './student/student.component';
import { TeachingAssistantComponent } from './teaching-assistant/teaching-assistant.component';

@NgModule({
  declarations: [
    AppComponent,
    TextFormatChangeDirective,
    StudentComponent,
    TeachingAssistantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TextFormatChangeDirective]
})
export class AppModule { }
