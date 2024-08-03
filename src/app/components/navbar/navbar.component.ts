import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navigationRoutes : { name: string, link: string }[] = [
    {
      name: 'Home',
      link: '/home'
    },
    {
      name: 'Challenge 1',
      link: '/challenge-one'
    },
    {
      name: 'Challenge 2',
      link: '/challenge-two'
    },
    {
      name: 'Challenge3',
      link: '/challenge-three'
    },

  ]
}
