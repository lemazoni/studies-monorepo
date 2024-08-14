import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-shared-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-ui.component.html',
  styleUrl: './shared-ui.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SharedUiComponent {}
