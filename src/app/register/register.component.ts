import { Subscription } from 'rxjs/Subscription';

import { RegisterService } from './../services/register.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  id: number;

  constructor(private router: Router, private RegisterService: RegisterService, private url: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = + this.url.snapshot.paramMap.get('id');
  }

  submit(form) {
    console.log(form.value)
    this.RegisterService.postClients(form.value).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error)
      }
    )
  }

  Viewusers() {
    this.RegisterService.getClients().subscribe(
      res => {
        console.log(res)
      },
      error => {
        console.log(error)
      })
  }

  UpdateUser(id: number, form) {
    this.RegisterService.updateClients(id, form.value).subscribe(
      res => {
        console.log(res)
      },
      error => {
        console.log(error)
      })
  }

  DeleteUser(id: number) {
    this.RegisterService.deleteClients(id).subscribe(
      res => {
        console.log(res)
      }, error => {
        console.log(error)
      })
  }
}
