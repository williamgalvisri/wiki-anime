import { Component, inject } from '@angular/core';
import { ButtonStylesTypes } from '../../../shared/components/card-header/card-header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrl: './anime-detail.component.css'
})
export class AnimeDetailComponent {
  private router = inject(Router);

  public buttonStyle: ButtonStylesTypes= {
    color: 'white',
    bgColor: 'black'
  }


  goBack() {
    this.router.navigate(['/animes']);
  }
}
