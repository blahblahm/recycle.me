import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { currentUserModel } from '../models/login';
import ValidateForm from '../helpers/validateForm';
import { UpdatePointsService } from '../services/update-points.service';

@Component({
  selector: 'worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker_styles/worker.component.scss']
})
export class WorkerComponent {

  currentUser : currentUserModel = new currentUserModel();

  form : FormGroup;

  constructor(public formWorker : FormBuilder, public http : HttpClient, public updatePointsService : UpdatePointsService) {
    this.form = formWorker.group({
      email: ['', Validators.required],
      weight: [Number, Validators.required],
      material_type: ['', Validators.required]
    })
  }

  ngOnInit() {
    const user = localStorage.getItem('token');
    if (user != null) {
      this.currentUser = JSON.parse(user);
    }
  }

  calculatePoints() {
    if (this.form.value.email == this.currentUser.email){
      alert("You can't send points to yourself")
    } else {
      if (this.form.valid) {
        this.updatePointsService.updatePoints(this.form.value.email, this.form.value.weight, this.form.value.material_type).subscribe((result) => {
          alert('Successfully sent points')
        },
        (error) => {
          alert("The informations you entered can't be processed")
        })
        this.form.reset();
        } else {
        ValidateForm.validateAllFormFields(this.form)
        alert('Informations you put in are invalid')
      }
    }
}
}
