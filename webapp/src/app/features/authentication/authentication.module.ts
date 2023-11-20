import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [CommonModule, AuthenticationRoutingModule],
})
export class AuthenticationModule {}
