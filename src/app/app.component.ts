import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from "./services/auth.service";
import { HttpClient } from "@angular/common/http";
import { UserInterface } from "./user.interface";
import { LoginComponent } from "./components/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  RouterLink, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  authService = inject(AuthService);
  http = inject(HttpClient);
  router = inject(Router);

  ngOnInit(): void {
    this.router.navigateByUrl('/login');

    this.http
      .get<{ user: UserInterface }>('https://api.realworld.io/api/user')
      .subscribe({
        next: (response) => {
          console.log('Response', response);
          this.authService.currentUserSig.set(response.user);
        },
        error: () => {  this.authService.currentUserSig.set(null);
        }
      })
  }

  navigationRoutes : { name: string, link: string }[] = [
    {
      name: 'Home',
      link: '/'
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

  logout() {
    console.log('logout');
    localStorage.setItem('token', '');
    this.authService.currentUserSig.set(null);
    this.router.navigateByUrl('/login');
  }
}
