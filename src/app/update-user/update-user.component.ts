import { RegisterService } from './../services/register.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  id: any;
  items: Object;
  name: Object;
  email: any;
  type: any;
  password: any;

  constructor(private RegisterService: RegisterService, private router: Router, private url: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.url.snapshot.paramMap.get('id')
    this.viewdata()
  }

  viewdata() {

    this.RegisterService.getClientbyid(this.id).subscribe(
      response => {
        this.name = response['name']
        this.email = response['email']
        this.type = response['type']
        this.password = response['password']
      }, err => {
        console.log(err)
      })
  }

  UpdateUser(form) {
   
    this.RegisterService.updateClients(this.id, form.value).subscribe(
      res => {
        console.log(res)
      },
      error => {
        console.log(error)
      })
  }
}
