import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar.component/navbar.component';
import { HeroComponent } from './hero.component/hero.component';
import { AboutComponent } from './about.component/about.component';
import { ServicesComponent } from './services.component/services.component';
import { ContctComponent } from './contct.component/contct.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent , HeroComponent , AboutComponent , ServicesComponent , ContctComponent , ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('landing-page-task');
}
