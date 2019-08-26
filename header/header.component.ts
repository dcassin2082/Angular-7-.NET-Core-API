import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public userService: UserService) { }

  ngOnInit() {
    // this.userService.loggedIn = true;
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
    this.userService.loggedIn = false;
  }
}
