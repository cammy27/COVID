import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.page.html',
  styleUrls: ['./disclaimer.page.scss'],
})
export class DisclaimerPage implements OnInit {

  constructor(private router: Router,public navCtrl: NavController,private storage:Storage) { }
  close(){
   
    this.storage.get("details").then(val=>{
      if(val === "true"){
        this.navCtrl.navigateForward('/detail-page');
      }
      else{
        console.log("the user clicked here");
        this.navCtrl.navigateForward('/agreement');
      }
    })
 
  }
  ngOnInit() {
  }

}
