import { Component, Input } from '@angular/core'
import { Cupons } from 'src/app/models/cupons'
import { CuponsBuyService } from 'src/app/services/cupons_buy.service'
import { currentUserModel } from 'src/app/models/login'

@Component({
  selector: 'cupon-details',
  templateUrl: './cupon-details.component.html',
  styleUrls: ['./cupon-detail_styles/cupon-details.component.scss'],
})
export class CuponDetailsComponent {
  currentUser: currentUserModel = new currentUserModel()

  @Input()
  cupon: Cupons[]

  @Input()
  ownedCupon: Cupons[]

  constructor(public cuponsBuyService: CuponsBuyService) {}

  clearCupon() {
    this.cupon = null
    this.ownedCupon = null
  }

  buyCupon(cupon) {
    const user = localStorage.getItem('token')
    this.currentUser = JSON.parse(user)
    this.cuponsBuyService.buyCupon(this.currentUser, cupon)
  }
}
