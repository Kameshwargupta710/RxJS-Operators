import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  calculatorInput: FormGroup;
  submitted = false;
  result: number = 0;
  apiResponse: any;
  apiErrorResponse: string = '';
  numberListInput: number = null;
  numberList: number[] = [];
  stringInToPattern: string = 'Kameshwargu';
  splittedString: string[] = ['K', 'a', 'm', 'e', 's', 'h', 'w', 'a', 'r', 'g', 'u'];


  constructor(private fb: FormBuilder, private _http: HttpClient) { }

  ngOnInit(): void {

    this.printReverseDiamond(5)
    this.printDiamond(5);
    this.printSplitReverseDiamond(5);

    this.calculatorInput = this.fb.group({
      inputone: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      inputtwo: [null, [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  opeartion(operator: string) {
    this.submitted = true;
    if (this.calculatorInput.valid) {
      if (operator == '+') {
        this.result = this.calculatorInput.controls.inputone.value + this.calculatorInput.controls.inputtwo.value
      } else if (operator == '-') {
        this.result = this.calculatorInput.controls.inputone.value - this.calculatorInput.controls.inputtwo.value
      } else if (operator == '/') {
        this.result = this.calculatorInput.controls.inputone.value / this.calculatorInput.controls.inputtwo.value
      } else if (operator == '*') {
        this.result = this.calculatorInput.controls.inputone.value * this.calculatorInput.controls.inputtwo.value
      }
    } else {
      this.result = 0;
    }


  }

  // convenience getter for easy access to form fields
  get f() { return this.calculatorInput.controls; }


  getIpAddress() {
    this._http.get('https://api.ipify.org/?format=json').subscribe((response) => {
      this.apiResponse = response;
      this.apiErrorResponse = '';
    }, (error) => {
      this.apiResponse = null;
      this.apiErrorResponse = 'Error from API';
    })
  }

  appendNumber() {
    this.numberList.push(this.numberListInput);
    this.numberList = this.numberList.sort((a, b) => a - b);
  }



  printDiamond(n) {
    var space = n - 1;

    for (let i = 0; i < n; i = i + 2) {

      for (let j = 0; j < space; j++) {
        document.getElementById("diamondPattern").innerHTML = document.getElementById("diamondPattern").innerHTML + '&nbsp;';
      }

      for (let k = 0; k <= i; k++) {
        document.getElementById("diamondPattern").innerHTML = document.getElementById("diamondPattern").innerHTML + "*" + "&nbsp;";
      }

      document.getElementById("diamondPattern").innerHTML = document.getElementById("diamondPattern").innerHTML + "<br>";
      space = space - 2;
    }

    space = 2;

    for (let i = n - 2; i > 0; i = i - 2) {

      for (let j = 0; j < space; j++) {
        document.getElementById("diamondPattern").innerHTML = document.getElementById("diamondPattern").innerHTML + "&nbsp;";
      }

      for (let j = 0; j < i; j++) {
        document.getElementById("diamondPattern").innerHTML = document.getElementById("diamondPattern").innerHTML + "*" + "&nbsp;";
      }

      document.getElementById("diamondPattern").innerHTML = document.getElementById("diamondPattern").innerHTML + "<br>";
      space = space + 2;
    }
  }

  printReverseDiamond(n) {

    var space = 2;

    for (let i = n - 2; i > 0; i--) {

      for (let j = 0; j < space; j++) {
        document.getElementById("reverseDiamond").innerHTML = document.getElementById("reverseDiamond").innerHTML + "&nbsp;";
      }

      for (let j = 0; j < i; j++) {
        document.getElementById("reverseDiamond").innerHTML = document.getElementById("reverseDiamond").innerHTML + "*" + "&nbsp;";
      }

      document.getElementById("reverseDiamond").innerHTML = document.getElementById("reverseDiamond").innerHTML + "<br>";
      space++;
    }
    space = n - 2;

    for (let i = 1; i < n - 2; i++) {

      for (let j = 0; j < space; j++) {
        document.getElementById("reverseDiamond").innerHTML = document.getElementById("reverseDiamond").innerHTML + '&nbsp;';
      }

      for (let k = 0; k <= i; k++) {
        document.getElementById("reverseDiamond").innerHTML = document.getElementById("reverseDiamond").innerHTML + "*" + "&nbsp;";
      }

      document.getElementById("reverseDiamond").innerHTML = document.getElementById("reverseDiamond").innerHTML + "<br>";
      space--;
    }

  }


  convertStringIntoPattern() {
    this.splittedString = [];
    this.splittedString = this.stringInToPattern.split("");
    console.log(this.splittedString);
    this.printReverseDiamond(5);
  }


  printSplitReverseDiamond(n) {

    var space = 2;

    for (let i = n - 2; i > 0; i--) {

      for (let j = 0; j < space; j++) {
        document.getElementById("splitReverseDiamond").innerHTML = document.getElementById("splitReverseDiamond").innerHTML + "&nbsp;";
      }

      for (let j = 0; j < i; j++) {
        document.getElementById("splitReverseDiamond").innerHTML = document.getElementById("splitReverseDiamond").innerHTML + this.splittedString.shift() + "&nbsp;";
      }

      document.getElementById("splitReverseDiamond").innerHTML = document.getElementById("splitReverseDiamond").innerHTML + "<br>";
      space++;
    }
    space = n - 2;

    for (let i = 1; i < n - 2; i++) {

      for (let j = 0; j < space; j++) {
        document.getElementById("splitReverseDiamond").innerHTML = document.getElementById("splitReverseDiamond").innerHTML + '&nbsp;';
      }

      for (let k = 0; k <= i; k++) {
        document.getElementById("splitReverseDiamond").innerHTML = document.getElementById("splitReverseDiamond").innerHTML + this.splittedString.shift() + "&nbsp;";
      }

      document.getElementById("splitReverseDiamond").innerHTML = document.getElementById("splitReverseDiamond").innerHTML + "<br>";
      space--;
    }

  }



}
