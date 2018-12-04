import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ArreySortPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-arrey-sort',
  templateUrl: 'arrey-sort.html',
})
export class ArreySortPage {

  fruit: string[] = ["orange", "apple", "pear", "grape", "banana"];
    numbers: number[] = [1234, 0.214, 8675309, -1, 582];
    people = [
      {'first_name':'Andrew', 'last_name':'Torvalds', 'age':46},
      {'first_name':'Larry', 'last_name':'Ellison', 'age':71},
      {'first_name':'Mark', 'last_name':'Zuckerberg', 'age':31},
      {'first_name':'Sergey', 'last_name':'Brin', 'age':42},
      {'first_name':'Vint', 'last_name':'Cerf', 'age':72},
      {'first_name':'Richard', 'last_name':'Stallman', 'age':62},
      {'first_name':'John', 'last_name':'Papa', 'age':42}
    ];

    

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("fruits", this.fruit)
    console.log("numbers",this.numbers)
    console.log("peoples",this.people)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArreySortPage');
  }

}
