import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZoomImagePage } from './zoom-image';

@NgModule({
  declarations: [
    ZoomImagePage,
  ],
  imports: [
    IonicPageModule.forChild(ZoomImagePage),
  ],
})
export class ZoomImagePageModule {}
