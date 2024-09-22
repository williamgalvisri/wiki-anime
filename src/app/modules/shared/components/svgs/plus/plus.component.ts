import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg-plus-icon',
  standalone: true,
  template: `
    <span [style.width]="width" [style.height]="height">
      <svg [attr.fill]="color" [attr.viewBox]="viewBox" [attr.width]="width" [attr.height]="height">
        <path d="M10 4.25V16.75M16.25 10.5H3.75" [style.stroke]="color" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  `,
  styles: []
})
export class PlusIconComponent {
  @Input() color: string = 'currentColor';
  @Input() width: string = '1em';
  @Input() height: string = '1em';
  @Input() viewBox: string = '0 0 24 24';
}
