import { Component } from '@angular/core'
import { currentUserModel } from 'src/app/models/login'
import { YourCuponsService } from 'src/app/services/your_cupons.service'
import { Cupons } from 'src/app/models/cupons'

@Component({
  selector: 'your-cupons',
  templateUrl: './your-cupons.component.html',
  styleUrls: ['./your-cupons_styles/your-cupons.component.scss'],
})
export class YourCuponsComponent {
  chosenCupon: Cupons[]

  constructor(public yourCuponService: YourCuponsService) {}

  ngOnInit() {
    this.yourCuponService.getUserCupons()
  }

  chooseCupon(cupon) {
    this.chosenCupon = cupon
  }
}
