import { Component, OnInit } from '@angular/core';
import { ClientService} from '../../service/client.service'
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }from '@angular/forms';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatDialogRef } from "@angular/material/dialog";

import { Client} from '../../model/client';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor(public crudApi:ClientService , public fb:FormBuilder,public toastr: ToastrService,private router : Router, @Inject(MAT_DIALOG_DATA)  public data,
  public dialogRef:MatDialogRef<AddClientComponent> ){ }

  ngOnInit() {
    if (this.crudApi.choixmenu == "A")
    {this.infoForm()};
  }
  infoForm() {
    this.crudApi.dataForm = this.fb.group({
        id: null,
        code: ['', [Validators.required]],
        libelle: ['', [Validators.required]],
        adresse: ['', [Validators.required, Validators.minLength(5)]],
        tel: ['', [Validators.required, Validators.minLength(8)]],
        email: [' ', [Validators.required, Validators.minLength(10)]],



        });
    }
    ResetForm() {
      this.crudApi.dataForm.reset();
  }
  onSubmit() {
    if (this.crudApi.choixmenu == "A")
    {
      this.addData();
    }
    else
    {

     this.updateData()
    }

}
addData() {
  this.crudApi.createData(this.crudApi.dataForm.value).
  subscribe( data => {
    this.toastr.success( 'Validation Faite avec Success');
    this.dialogRef.close();

    this.crudApi.getAll().subscribe(
      response =>{this.crudApi.list = response;}
     );

    this.router.navigate(['/clients']);
  });
}
  updateData()
  {

    this.crudApi.updatedata(this.crudApi.dataForm.value.id,this.crudApi.dataForm.value).
    subscribe( data => {
      this.toastr.success( 'Modification Faite avec Success');
      this.dialogRef.close();

      this.crudApi.getAll().subscribe(
        response =>{this.crudApi.list = response;}
       );
      this.router.navigate(['/clients']);
    });
  }


}
