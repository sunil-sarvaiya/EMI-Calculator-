import { Component } from '@angular/core';

@Component({
  selector: 'app-emi-calc',
  templateUrl: './emi-calc.component.html',
  styleUrls: ['./emi-calc.component.scss']
})
export class EmiCalcComponent {
[x: string]: any;

public p:number = 100000;
public n:number = 120;
public r:number = 8.0;
public emi:number = 0;
public totalinterest:number=0;
public totalpayment : number=0;
public percentage:number=0;
public intrests:number = 0;
public payments: any[] = [];

public amountchange(e:any){
 this.p= e.target.value;
}
public monthchange(e:any){
  this.n= e.target.value;
}
public ratechange(e:any){
  this.r= e.target.value;
}



public calculate(){

  this.r = this.r / (12 * 100);



  this.emi = this.p * this.r * Math.pow(1 + this.r, this.n) / (Math.pow(1 + this.r, this.n) - 1);

  this.totalinterest = this.emi * this.n - this.p;

  this.totalpayment = this.emi * this.n;

  this.percentage = this.totalinterest*100/this.totalpayment;

  this.generatePayments(this.emi, this.r);
  return (this.emi);


}


generatePayments(emi: number, rate: number): any {
  let balance = this.p;
    this.payments = [];

    for (let x = 1; x <= this.n; x++) {
      let interest = (balance * rate);
      let principal = (emi - interest);
      let endingBalance = (balance - principal);



      this.payments.push({
        paymentNo: x,
        beginningBalance: balance,
        emi: emi,
        principal: principal,
        interest: interest,
        endingBalance: endingBalance
      });

      balance = endingBalance;
    }
  }
}




