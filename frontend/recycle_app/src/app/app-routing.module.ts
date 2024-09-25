import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './components/login/login.component'
import { RegisterUserComponent } from './components/register-user/register-user.component'
import { IndexComponent } from './components/index/index/index.component'
import { MoreIndexComponent } from './components/index/more-index/more-index.component'
import { ProfileIndexComponent } from './components/profile/profile-index/profile-index.component'
import { ProfileComponent } from './components/profile/profile/profile.component'
import { AllCuponsComponent } from './components/cupons/all-cupons/all-cupons.component'
import { YourCuponsComponent } from './components/cupons/your-cupons/your-cupons.component'
import { AdminViewComponent } from './components/admin-view/admin-view.component'
import { WorkerComponent } from './components/worker/worker.component'
import { AuthGuard } from './auth.guard'

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'index', component: IndexComponent },
  { path: 'about_us', component: MoreIndexComponent },
  { path: 'news', component: ProfileIndexComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'all_cupons',
    component: AllCuponsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'your_cupons',
    component: YourCuponsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'worker', component: WorkerComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminViewComponent, canActivate: [AuthGuard] },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
