import { NgModule } from '@angular/core';
import { GroupByComponent } from './group-by/group-by';
import { CommunicationComponent } from './communication/communication';
import { NgxPipesComponent } from './ngx-pipes/ngx-pipes';
import { NgxPipesArrayComponent } from './ngx-pipes-array/ngx-pipes-array';
import { PushNotificationComponent } from './push-notification/push-notification';
import { BraintreeComponent } from './braintree/braintree';
@NgModule({
	declarations: [GroupByComponent,
    CommunicationComponent,
    NgxPipesComponent,
    NgxPipesArrayComponent,
    PushNotificationComponent,
    BraintreeComponent],
	imports: [],
	exports: [GroupByComponent,
    CommunicationComponent,
    NgxPipesComponent,
    NgxPipesArrayComponent,
    PushNotificationComponent,
    BraintreeComponent]
})
export class ComponentsModule {}
