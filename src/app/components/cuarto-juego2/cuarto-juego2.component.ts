import { Component } from '@angular/core';

@Component({
  selector: 'app-cuarto-juego2',
  templateUrl: './cuarto-juego2.component.html',
  styleUrls: ['./cuarto-juego2.component.css']
})
export class CuartoJuego2Component {

  NaturalNumber: number;
  romanNumber: string;

  constructor() {
    this.NaturalNumber = 0;
    this.romanNumber = '';
  }

  convertToRoman() {
    const romanNumerals = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];

    if (this.NaturalNumber >= 1 && this.NaturalNumber <= 1000) {
      let result = '';
      let num = this.NaturalNumber;

      for (const pair of romanNumerals) {
        while (num >= pair.value) {
          result += pair.numeral;
          num -= pair.value;
        }
      }

      this.romanNumber = result;
    } else {
      this.romanNumber = 'Número fuera de rango (1-1000)';
    }
  }
  
}
