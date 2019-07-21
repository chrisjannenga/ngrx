import { Component, OnInit } from '@angular/core';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAuthenticated = false;
  profile: any;

  private auth0Client: Auth0Client;

  constructor(private authService: AuthService) {}

  async ngOnInit() {
    this.auth0Client = await this.authService.getAuth0Client();
    this.authService.isAuthenticated.subscribe(value => {
      this.isAuthenticated = value;
    });
    this.authService.profile.subscribe(profile => {
      this.profile = profile;
    });
  }

  async login() {
    await this.auth0Client.loginWithRedirect({});
  }

  logout() {
    this.auth0Client.logout({
      client_id: this.authService.config.client_id,
      returnTo: window.location.origin
    });
  }

}
