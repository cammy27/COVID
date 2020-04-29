import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-dispnea-index',
  templateUrl: './dispnea-index.page.html',
  styleUrls: ['./dispnea-index.page.scss'],
})
export class DispneaIndexPage implements OnInit {

  constructor(private router: Router,public navCtrl: NavController) { }
  close(){
    this.navCtrl.navigateForward('/detail-page');
  }
  ngOnInit() {
  }

}
