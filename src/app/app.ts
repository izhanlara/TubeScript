import { Component, signal } from '@angular/core';
import { SectionHeaderComponent } from '@sections/section-header/section-header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [SectionHeaderComponent]
})
export class App {
  protected readonly title = signal('TubeScript');
}
