import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styles: []
})
export class CustomersComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
   this.userService.userIsAuthenticated().subscribe((res: any) => {
     if(res == false){
       this.userService.loggedIn = false;
       this.router.navigateByUrl('/user/login');
     }
     else{
       this.userService.loggedIn = true;
     }
   })
  }

}
