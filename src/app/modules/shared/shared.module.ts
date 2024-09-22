import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';



@NgModule({
  declarations: [NavbarComponent, CardComponent, CardHeaderComponent],
  exports: [NavbarComponent, CardComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
