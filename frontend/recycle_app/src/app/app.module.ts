import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { MoreIndexComponent } from './more-index/more-index.component';
import { ProfileIndexComponent } from './profile-index/profile-index.component';
import { ProfileComponent } from './profile/profile.component';
import { AllCuponsComponent } from './all-cupons/all-cupons.component';
import { NavigationComponent } from './navigation/navigation.component';
import { YourCuponsComponent } from './your-cupons/your-cupons.component';
import { NewsService } from './services/news.service';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { RoleUpdateService } from './services/update-role.service';
import { WorkerComponent } from './worker/worker.component';
import { CuponsService } from './services/cupons.service';
import { CuponDetailsComponent } from './cupon-details/cupon-details.component';
import { YourCuponsService } from './services/your_cupons.service';
import { CuponsBuyService } from './services/cupons_buy.service';
import { AuthService } from './services/auth.service';
import { UpdatePointsService } from './services/update-points.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginComponent,
    IndexComponent,
    MoreIndexComponent,
    ProfileIndexComponent,
    ProfileComponent,
    AllCuponsComponent,
    NavigationComponent,
    YourCuponsComponent,
    AdminViewComponent,
    WorkerComponent,
    CuponDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NewsService, RoleUpdateService, CuponsService, YourCuponsService, CuponsBuyService, UpdatePointsService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
