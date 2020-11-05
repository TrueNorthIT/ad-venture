import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path: 'dash',
    component: DashComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
