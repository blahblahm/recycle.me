import { Component } from '@angular/core'
import { currentUserModel } from '../../models/login'
import { Router } from '@angular/router'

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation_styles/navigation.component.scss'],
})
export class NavigationComponent {
  constructor(private router: Router) {}

  currentUser: currentUserModel = new currentUserModel()

  visible: boolean = false
  disabled: boolean = true
  user: boolean = true

  dropdown() {
    this.visible = !this.visible
  }

  ngOnInit() {
    if (this.router.url == '/worker') {
      this.user = false
    } else if (this.router.url == '/admin') {
      this.user = false
      this.disabled = true
    } else {
      this.user = true
    }
    const user = localStorage.getItem('token')
    if (user != null) {
      this.currentUser = JSON.parse(user)
      if (this.currentUser.role == 'Worker') {
        this.disabled = false
      }
    }
  }

  loggedOut() {
    localStorage.removeItem('token')
    this.router.navigate(['index'])
    console.log(localStorage.getItem('token'))
  }

  loadNews() {
    this.router.navigate(['news'])
  }
}
