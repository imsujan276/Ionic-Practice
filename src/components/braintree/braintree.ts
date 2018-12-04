import { Component } from '@angular/core';
import { Braintree, ApplePayOptions, PaymentUIOptions, PaymentUIResult } from '@ionic-native/braintree';


/**
 * Generated class for the BraintreeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'braintree',
  templateUrl: 'braintree.html'
})
export class BraintreeComponent {

  text: string;

  BRAINTREE_TOKEN = '9a8sdyhas9d8yas9d8aysd98asd';

  constructor(private braintree: Braintree) {
    console.log('Hello BraintreeComponent Component');
    this.text = 'Braintree Example';
    
    this.executeBraintree();
  }

  executeBraintree(){

    // NOTE: Do not provide this unless you have configured your Apple Developer account
    // as well as your Braintree merchant account, otherwise the Braintree module will fail.
    // const appleOptions: ApplePayOptions = {
    //   merchantId: '<YOUR MERCHANT ID>',
    //   currency: 'USD',
    //   country: 'US'
    // };

    const paymentOptions: PaymentUIOptions = {
      amount: '14.99',
      primaryDescription: 'Your product or service (per /item, /month, /week, etc)',
    };

    this.braintree.initialize(this.BRAINTREE_TOKEN)
      // .then(() => this.braintree.setupApplePay(appleOptions))
      .then(() => this.braintree.presentDropInPaymentUI(paymentOptions))
      .then((result: PaymentUIResult) => {
        if (result.userCancelled) {
          console.log("User cancelled payment dialog.");
          alert('cancelled')
        } else {
          console.log("User successfully completed payment!");
          console.log("Payment Nonce: " + result.nonce);
          console.log("Payment Result.", result);
          alert('Success')
        }
      })
      .catch((error: string) => {
        console.error(error)
        alert(error)
      });
  }

}
