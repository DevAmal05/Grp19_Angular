import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import {MenubarModule} from 'primeng/menubar';
import {ToastModule} from 'primeng/toast';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PeoplelistComponent } from './peoplelist/peoplelist.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PeoplelistComponent,
    ResetpasswordComponent,
    AdduserComponent,
    ConfirmationDialogComponent,
    UpdateuserComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatBadgeModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
