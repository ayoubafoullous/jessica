import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYlPSSHpFOAV8PYQq15ggA12VD84OqN74",
  authDomain: "angular-app-d4c54.firebaseapp.com",
  projectId: "angular-app-d4c54",
  storageBucket: "angular-app-d4c54.appspot.com",
  messagingSenderId: "1049824493981",
  appId: "1:1049824493981:web:23834507d402d828d86f74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);