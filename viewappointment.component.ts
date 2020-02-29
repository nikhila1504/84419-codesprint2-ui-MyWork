import { Component, OnInit } from '@angular/core';
import { PlaceappointmentService } from '../services/placeappointment.service';
import { Placeappointment } from '../modals/placeappointment';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent implements OnInit {

  apps:Placeappointment[];
  errMsg:string;

  constructor(private appService :PlaceappointmentService) { }
  ngOnInit(){
    this.loadData();
  }

  loadData() {
    this.apps=null;
    this.errMsg=null;
    this.appService.getAll().subscribe(
      (data)=>{this.apps=data;},
      (err)=>{this.errMsg='sorry server not reachable';}
    );
  }
  delete(id:number){
    if(confirm(`Are you sure of deleting emp#${id}`)){
      this.appService.deleteById(id).subscribe(
        ()=>{this.loadData();},
        (err)=>{this.errMsg=err;}
      );

    }
  }

}

