import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  CreateNewUser(email:string,password:string) {
    return new Promise (
      (resolve,reject) => {
        firebase.auth().createUserWithEmailAndPassword(email,password).then(
          () => {
            resolve(true)

          },
          (error) =>{
            reject(error)
          }
         
        )

      }
    )
  }

  SignInUser(email:string,password:string) {
return new Promise (
  (resolve,reject) => {
    firebase.auth().signInWithEmailAndPassword(email,password).then(
      () => {
        resolve(true)
      },
      (error) => {
        reject(error)
      }
    )
  }
)
  }

  SignOutUser() {
    firebase.auth().signOut()
  }

}
