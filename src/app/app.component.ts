import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonalizedhealthComponent } from './components/personalizedhealth/personalizedhealth.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonalizedhealthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'personalizedhealth';
}
