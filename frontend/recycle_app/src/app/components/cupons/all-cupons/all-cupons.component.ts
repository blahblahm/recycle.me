import { Component } from '@angular/core'
import { CuponsService } from '../../../services/cupons.service'
import { Cupons } from '../../../models/cupons'
import { currentUserModel } from '../../../models/login'
import { Router } from '@angular/router'
import { CuponsBuyService } from '../../../services/cupons_buy.service'

@Component({
  selector: 'all-cupons',
  templateUrl: './all-cupons.component.html',
  styleUrls: ['./all-cupons-styles/all-cupons.component.scss'],
})
export class AllCuponsComponent {
  chosenCupon: Cupons[]
  currentUser: currentUserModel = new currentUserModel()

  constructor(
    public cuponsService: CuponsService,
    public cuponsBuyService: CuponsBuyService,
    public router: Router
  ) {}

  ngOnInit() {
    this.cuponsService.getCupons()
  }

  chooseCupon(cupon) {
    this.chosenCupon = cupon
  }

  buyCupon(cupon) {
    const user = localStorage.getItem('token')
    this.currentUser = JSON.parse(user)
    this.cuponsBuyService.buyCupon(this.currentUser, cupon)
  }
}
