import { Component } from '@angular/core'
import { currentUserModel } from '../../../models/login'

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile_styles/profile.component.scss'],
})
export class ProfileComponent {
  currentUser: currentUserModel = new currentUserModel()

  ngOnInit() {
    const user2 = localStorage.getItem('token')
    if (user2 != null) {
      this.currentUser = JSON.parse(user2)
    }
  }
}
