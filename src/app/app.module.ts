import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_SENDER_ID
};

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ImgLazyComponent } from './img-lazy/img-lazy.component';
import { ImgFirebaseComponent } from './img-firebase/img-firebase.component';
import { MyBtnComponent } from './my-btn/my-btn.component';
import { CoolService } from './cool.service';

@NgModule({
  declarations: [ImgLazyComponent, ImgFirebaseComponent, MyBtnComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireStorageModule
  ],
  providers: [CoolService],
  entryComponents: [ImgLazyComponent, ImgFirebaseComponent, MyBtnComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {

    // create array of tuples, first item = classname, 2nd element = element
    const elements: any[] = [
      [ImgLazyComponent, 'img-lazy'],
      [ImgFirebaseComponent, 'img-firebase'],
      [MyBtnComponent, 'my-btn']
    ];

    // destructure tuples using a for loop
    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }
}
