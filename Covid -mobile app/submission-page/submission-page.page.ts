import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-submission-page',
  templateUrl: './submission-page.page.html',
  styleUrls: ['./submission-page.page.scss'],
})
export class SubmissionPagePage implements OnInit {
  name: any;

  constructor(private storage:Storage,private router: Router,public navCtrl: NavController) { }
  exitApp(){
    this.storage.set("reedit", "true");
    this.router.navigate(['/home']);
    // navigator['app'].exitApp();
  }
  ngOnInit() {
    this.storage.get("name").then(val=>{
      console.log("the name of the user is:" + val);
      this.name =val;
    });
  }

}
