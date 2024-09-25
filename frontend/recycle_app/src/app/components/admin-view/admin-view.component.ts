import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { RoleUpdateService } from '../../services/update-role.service'

@Component({
  selector: 'admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin_styles/admin-view.component.scss'],
})
export class AdminViewComponent {
  form: FormGroup

  constructor(
    adminForm: FormBuilder,
    public http: HttpClient,
    public roleUpdateService: RoleUpdateService
  ) {
    this.form = adminForm.group({
      role: ['', Validators.required],
      email: ['', Validators.required],
    })
  }

  updateRole() {
    if (this.form.valid && this.form.value.email !== 'admin@gmail.com') {
      this.roleUpdateService
        .updateRole(this.form.value.email, this.form.value.role)
        .subscribe(
          (result: any) => {
            alert('Successfully changed role')
            this.form.reset()
          },
          (error) => {
            alert('Something went wrong, please try again.')
          }
        )
    } else {
      alert('Entered information are invalid')
    }
  }
}
