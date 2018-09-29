import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService{
  token: string;

  constructor(private router: Router){}

  signupUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
  }

  signinUser(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
          .then((token: string) => {
            this.token = token;
          }).catch((err) => {
            console.log(err);
          });
      }
    )
    .catch(
      (error: Error) => console.log(error)
    )
  }

  getToken(){
    firebase.auth().currentUser.getIdToken()
    .then((token: string) => {
      this.token = token
    }).catch((err) => {
      console.log(err);
    });

    return this.token;
  }

  logout(){
    firebase.auth().signOut();
    this.token = null;
  }
  
  isAuthenticated(){
    return this.token != null;
  }
}