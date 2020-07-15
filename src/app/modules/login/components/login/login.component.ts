import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import AuthService from '../../../../shared/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginInvalid: boolean;
  form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  handleInputChange(event: any) {
    const { name, value } = event.target;
    this[name] = value;
  }
  handleLogin(): void {
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;
    this.authService.login({ email, password }).subscribe((e) => {
      if (!e.loggedIn) {
        this.loginInvalid = true;
      } else {
        localStorage.setItem('jwt', e.token);
        this.router.navigate(['/profile']);
      }
    });
  }
}
