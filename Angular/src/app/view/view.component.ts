import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private service : UserServiceService, private fb: FormBuilder) { }
  updateForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    dob: ['', Validators.required],
    bio: ['', Validators.required]
  });

  Users;


  ngOnInit() {
     this.get();
  }
  showModal;

  close(){
    this.showModal=false;
  }



  temporaryUserId;
  loadData(user){
    this.updateForm.setValue({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      dob: user.dob,
      bio: user.bio,
    });
    this.temporaryUserId = user._id;
    this.show();
  }

  show(){
    this.showModal=true;
  }

  search;

  // Get data method
  get(){
    this.service.getUser().subscribe(data=>{
      this.Users = data;
      this.setLength(this.Users.length);
    });
  }

  setLength(l){
    if(l>0){
      this.display = true;
    }
    else{
      this.display = false;
    }
  }

  display;



  // Delete user method
  delete(id){
    this.service.deleteUser(id).subscribe(data=>{
      alert("Deleted successfully");
      this.get();
    });
  }

  temporaryUser;
  // Update user data method
  update(data){
    this.service.updateUser(data,this.temporaryUserId).subscribe(data=>{
      this.temporaryUser = data;
      this.close();
      this.get();
      alert("Updated successfully");
    })
  }

}
