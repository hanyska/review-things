import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'rt-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  forgotPasswordForm =  new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private dialogRef: NbDialogRef<ForgotPasswordComponent>) { }

  onClose() {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log(this.forgotPasswordForm.value);
  }

}
