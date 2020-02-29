import { Component, OnInit } from '@angular/core';
import { Placeappointment } from '../modals/placeappointment';
import { PlaceappointmentService } from '../services/placeappointment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-placeappointment',
  templateUrl: './placeappointment.component.html',
  styleUrls: ['./placeappointment.component.css']
})
export class PlaceappointmentComponent implements OnInit {

  app : Placeappointment;
  msg : string;
  isNew : boolean;
  

  constructor(
    private appService:PlaceappointmentService,
    private actRoute:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {
    let appId=this.actRoute.snapshot.params.id;

    if(appId){
      this.isNew=false;
      this.appService.getById(appId).subscribe(
        (data)=>{
          this.app=data;
         
        }
      );

    }else{
      this.isNew=true;
      this.app = {
        id:0,
         firstName:'',
         lastName:'',
        address:'',
        city:'',
        trainerPrefernece:'',
        package:'',
        mobileno:''
    
   
      };
      
    }
  }
  save(){

    let ob:Observable<Placeappointment>;

    if(this.isNew){
      ob=this.appService.add(this.app);
    }else{
      ob=this.appService.save(this.app);
    }
    ob.subscribe(
      (data)=>{
        this.router.navigateByUrl("");
      },
      (errResponse)=>{
        this.msg=errResponse.error;
      }
    );
  }
}