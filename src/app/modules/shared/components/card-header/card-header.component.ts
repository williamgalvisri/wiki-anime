import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

export type ButtonStylesTypes  = {
  color: 'white' | 'black';
  bgColor: 'white' | 'black';
}

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.css'
})
export class CardHeaderComponent {
  @Input() img = 'assets/images/akira-toriyama.png';
  @Input() buttonStyle: ButtonStylesTypes = {
    bgColor: 'black',
    color: 'white'
  }

}
