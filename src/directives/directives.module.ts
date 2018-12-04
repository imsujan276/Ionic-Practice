import { NgModule } from '@angular/core';
import { ElasticHeaderDirective } from './elastic-header/elastic-header';
import { CustomBackgroundDirective } from './custom-background/custom-background';
import { ZoomImageDirective } from './zoom-image/zoom-image';
@NgModule({
	declarations: [ElasticHeaderDirective,
    CustomBackgroundDirective,
    ZoomImageDirective],
	imports: [],
	exports: [ElasticHeaderDirective,
    CustomBackgroundDirective,
    ZoomImageDirective]
})
export class DirectivesModule {}
