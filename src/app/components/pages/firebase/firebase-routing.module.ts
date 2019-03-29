import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirebaseComponent } from './views/firebase.component';

const fireRoutes : Routes =[

 {path:"",component:FirebaseComponent}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(fireRoutes)
  ],
  exports:[RouterModule]
})
export class FirebaseRoutingModule { }
