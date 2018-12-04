import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController, Platform } from 'ionic-angular';


@Injectable()
export class Functions {
    loader: any;
    constructor(private alert: AlertController, private loadingController: LoadingController,
        private toastCtrl: ToastController, public platform: Platform) {
    }
    showAlert(title, text) {
        let alert = this.alert.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    }
    presentLoading(text?: string) {
        let loadingText = "Please wait..."
        if (text) {
            loadingText = text;
        }
        this.loader = this.loadingController.create({
            content: loadingText
        })
        this.loader.present();
    }
    dismissLoading() {
        this.loader.dismiss();
    }

    presentToast(message?, duration?, position?) {
        let toastMessage: string = "Done";
        let toastDuration: number = 3000;
        let toastPosition: string = 'middle';
        if (message) {
            toastMessage = message;
        }
        if (duration) {
            toastDuration = duration;
        }
        if (position) {
            toastPosition = position;
        }
        let toast = this.toastCtrl.create({
            message: toastMessage,
            duration: toastDuration,
            position: toastPosition
        });

        toast.onDidDismiss(() => {
            //console.log('Dismissed toast');
        });

        toast.present();
    }

    compareValues(key, order = 'asc') {
        return function (a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
            }
            const varA = (typeof a[key] === 'string') ?
                a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string') ?
                b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order == 'desc') ? (comparison * -1) : comparison
            );
        };
    }
    get_unique_values_from_array_object(array, property) {
        var unique = {};
        var distinct = [];
        for (var i in array) {
            if (typeof (unique[array[i][property]]) == "undefined") {
                distinct.push(array[i]);
            }
            unique[array[i][property]] = 0;
        }
        return distinct;
    }
    remove_element_from_array = function (array, item) {
        var index = array.indexOf(item);
        array.splice(index, 1);
    }

    getFormData(object) {
        const formData = new FormData();
        Object.keys(object).forEach(key => formData.append(key, object[key]));
        return formData;
    }
    appExitConfirmation() {
        const alert = this.alert.create({
            title: 'App termination',
            message: 'Do you want to close the app?',
            buttons: [{
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                    console.log('Application exit prevented!');
                }
            }, {
                text: 'Close App',
                handler: () => {
                    this.platform.exitApp(); // Close this application
                }
            }]
        });
        alert.present();
    }
}