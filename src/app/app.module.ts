import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../src/environments/environment'; // Import environment variable
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LoginComponent } from '../app/login/login.component';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent,
    AngularFireModule.initializeApp(environment.firebase), // Initialize AngularFireModule here
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFirestoreModule,
    RouterModule
  ],
  providers: [],
})
export class AppModule { }