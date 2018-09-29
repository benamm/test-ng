import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCoDpa_CQ1O6RDydDwF8Z_BN3AoFwKoD0A",
      authDomain: "ng-api-test.firebaseapp.com"
    })
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
