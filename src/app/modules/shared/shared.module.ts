import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { PlusIconComponent } from './components/svgs/plus/plus.component';



@NgModule({
  declarations: [NavbarComponent, CardComponent, CardHeaderComponent],
  exports: [NavbarComponent, CardComponent, CardHeaderComponent, PlusIconComponent],
  imports: [
    CommonModule,
    PlusIconComponent
  ]
})
export class SharedModule { }
