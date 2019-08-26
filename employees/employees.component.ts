import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: []
})
export class EmployeesComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
   this.userService.userIsAuthenticated().subscribe(x => {
     if(x == false){
       this.userService.loggedIn = false;
       this.router.navigateByUrl('/user/login');
     }
     else{
       this.userService.loggedIn = true;
     }
   })
  }

}
