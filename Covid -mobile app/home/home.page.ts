import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import{CovidServiceService} from '../covid-service.service';
import { from } from 'rxjs';
import { Storage } from '@ionic/storage';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {
  @ViewChild('number',{static: false}) number: ElementRef;
  private todo : FormGroup;
  // public slideOneForm:FormGroup;
  products = [];
 public login:boolean=true;
 public id:any;
  patient_Details: () => void;
   public p: any;
  details: string;
  i: number;
  location: Promise<any>;
  set: Promise<any>;
  spin: boolean = true;
  show: boolean =false;
  reedit: boolean =true;
  phone: any;
  constructor(private formBuilder: FormBuilder,   private router: Router,public navCtrl: NavController,public covid:CovidServiceService,private storage: Storage) {
    console.log('cons-cons')
    this.todo = formBuilder.group({
      number: ['',Validators.compose([Validators.maxLength(10)])]
        
    });
  }

  // logForm(){
  //   console.log(this.number.nativeElement.value.length)
  //   if(this.number.nativeElement.value.length === "10"){
  //     this.navCtrl.navigateForward('/agreement');
  //     document.getElementById('show').style.opacity="1";
  //   }
  //   else{
  //     console.log("enter 10 digit number");
  //   }
    
  // }
 
  navigate(){
    if(this.show === true && this.number.nativeElement.value.length == "10" ){
      this.navCtrl.navigateForward('/agreement');
    }
    
  }


phone_number(id){
  console.log("the entered value is" + id);
  // persisting the id in ionic storage
  this.p=this.storage.set("id", id);
  this.p.then(data=>{
    console.log( "the stored id is:" + data);
    }) .catch(error => { 
    console.log(error); 
    }); 
}


enable(){
  console.log(this.number.nativeElement.value.length)
  if(this.number.nativeElement.value.length == "10"){
    // this.navCtrl.navigateForward('/agreement');
    document.getElementById('show').style.opacity="1";
    this.show = true;
  }
  else{
    document.getElementById('show').style.opacity="0.5";
    console.log("enter 10 digit number");
    this.show = false;
  }
}

ngOnInit() {
  console.log("the user comes back to the home page")
    this.storage.get("reedit").then(val=>{
      console.log("the reedit value is" + val);
      if(val === "true"){
        this.spin = true;
        this.reedit = true;
      }
    })
      this.spin= false;
      this.storage.get("id").then(val=>{
        this.phone = val;
        if(val == null){
          this.spin=true;
          console.log(" id is not present");
        }
        else{
          console.log("the id is  present"); 
          this.storage.set("edit", "false");
          this.navCtrl.navigateForward('/detail-page');
        }

      // this.covid.getdetails(val).then((data:any)=>{
      //   if( data.data === '{}'){
      //     this.spin=true;
      //    console.log(" id is not present");
      //    console.log(data);
      //   }
      //   else{
         
      //     console.log(data);
      //     console.log("the id is  present"); 
      //     this.storage.set("edit", "false");
      //     this.navCtrl.navigateForward('/detail-page');
        
          
      //   } 
      //  })
    })
    
  
  
}
}
