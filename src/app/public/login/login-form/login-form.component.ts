import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/common/services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  user: any ={
  email: 'esmeralda@webtraining.zone',
  password:'esmeralda'
  };
  constructor(public _authService: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit(event:Event) {
    //prevengo que envie el formulario
    event.preventDefault();
    console.log('>> sent POST request with form');
    this._authService.login(this.user.email,this.user.password).subscribe(        
     (data) => {
      //Data from server (laravel)
      console.log(data);
   },
     error => console.error(error),
    
    );
  }

}
