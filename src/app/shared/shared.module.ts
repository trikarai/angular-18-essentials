import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent], // Declare the CardComponent
  exports: [CardComponent], // Export the CardComponent for use in other modules
})
export class SharedModule {}
