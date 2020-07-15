import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import AuthService from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public token: string;
  public password: string;
  public email: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  handleInputChange(event: any) {
    const { name, value } = event.target;
    this[name] = value;
  }
  handleLogin(): void {
    this.authService.login({
      email: this.email,
      password: this.password
    }).subscribe((e) => {
      console.log(e);
      this.token = e.token;
    });
  }
}
