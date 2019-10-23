import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "../user-service.service";
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [UserServiceService]
})
export class FormComponent {

  constructor(private service: UserServiceService, private fb: FormBuilder){}
  userForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    dob: ['', Validators.required],
    bio: ['', Validators.required]
  });
  
  object;
  data;
  submit(userForm){
    this.service.createUser(userForm.value).subscribe(user=>{
      this.data = user;
      this.userForm.reset();
      alert("success");
    });
    
  }

  
}
