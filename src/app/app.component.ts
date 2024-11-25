import { Component } from '@angular/core';
import { BookComponent } from './book/book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookComponent],
  template: `<app-book></app-book>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Activity32';
}
