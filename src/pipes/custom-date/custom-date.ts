import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CustomDatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {

  date; 
  dateParts;

  transform(value: string, ...args) {
    if(value == undefined){return}

    // default value is in the form of yyyy-mm-dd
    this.dateParts = value.split("-");
    console.log(this.dateParts)
    let sp = args[0] ? args[0] : '-'; // separator
    let customFormat = args[1] ? args[1] : 'ymd'; // date format
    
    let y = customFormat.indexOf('y');
    let m = customFormat.indexOf('m');
    let d = customFormat.indexOf('d');

    if(y == 0){ this.yearFirst(m,sp)}
    else if(m == 0){ this.monthFirst(y,sp)}
    else this.dayFirst(d, sp);

    return this.date
  }

  yearFirst(m, separator){
    if(m == 1){
      this.date = this.dateParts[0]+ separator +this.dateParts[1]+ separator +this.dateParts[2]; //ymd
    }else{
      this.date = this.dateParts[0]+ separator +this.dateParts[2]+ separator +this.dateParts[1]; //ydm
    }
  }

  monthFirst(y, separator){
    if(y == 1){
      this.date = this.dateParts[1]+ separator +this.dateParts[0]+ separator +this.dateParts[2]; //myd
    }else{
      this.date = this.dateParts[1]+ separator +this.dateParts[2]+ separator +this.dateParts[0]; //mdy
    }
  }

  dayFirst(y, separator){
    if(y == 1){
      this.date = this.dateParts[2]+ separator +this.dateParts[0]+ separator +this.dateParts[1]; //dym
    }else{
      this.date = this.dateParts[2]+ separator +this.dateParts[1]+ separator +this.dateParts[0]; //dmy
    }
  }
}
