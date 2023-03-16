import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  form = new FormGroup({

    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    phone: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    message: new FormControl('')

  })

 

  get name(){
    return this.form.get('name')
  }

  get email(){
    return this.form.get('email')
  }
  get phone(){
    return this.form.get('phone')
  }

  submit(){
    console.log(this.form.value);
  }


}
