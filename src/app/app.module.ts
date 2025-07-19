import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    // Importing SharedModule to use shared components like CardComponent
    TasksModule, // Importing TasksModule to manage tasks
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
