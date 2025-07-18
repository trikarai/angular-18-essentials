import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
  ],
  providers: [],
})
export class AppModule {
  // This is the root module of the application.
  // It can be used to import other modules, declare components, and provide services.

  constructor() {
    // Initialization logic can go here if needed.
  }
}
