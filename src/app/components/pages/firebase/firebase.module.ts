import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseComponent } from './views/firebase.component';
import { FirebaseRoutingModule } from './firebase-routing.module';

@NgModule({
  declarations: [FirebaseComponent],
  imports: [
    CommonModule,
    FirebaseRoutingModule
  ]
})
export class FirebaseModule { }
