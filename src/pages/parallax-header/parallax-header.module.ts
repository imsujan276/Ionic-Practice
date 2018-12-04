import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParallaxHeaderPage } from './parallax-header';

@NgModule({
  declarations: [
    ParallaxHeaderPage,
  ],
  imports: [
    IonicPageModule.forChild(ParallaxHeaderPage),
  ],
})
export class ParallaxHeaderPageModule {}
