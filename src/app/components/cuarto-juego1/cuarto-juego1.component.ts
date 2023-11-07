import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cuarto-juego1',
  templateUrl: './cuarto-juego1.component.html',
  styleUrls: ['./cuarto-juego1.component.css']
})
export class CuartoJuego1Component implements OnDestroy {
  multiplicand: number = this.generateRandomNumber();
  multiplier: number = this.generateRandomNumber();
  partials: number[] = new Array(3).fill(null);
  userAnswer: string = '';
  startTime: Date = new Date(); // Initializing with a new Date object.
  elapsedTime: string = '00:00:00';
  timerInterval: any; // You might want to use `number` type for NodeJS timers or `ReturnType<typeof setInterval>` for browser timers
  smartScore: number = 0; // Initialize the SmartScore to 0
  questionsAnswered: number = 0; // Initialize the counter for questions answered
  currentStep: number = 0;

  constructor() {
    this.startTimer();
  }

  ngOnInit(): void {
    this.startTimer(); // Start the timer when the component initializes
  }

  generateRandomNumber(): number {
    return Math.floor(Math.random() * 900 + 100); // Número aleatorio de tres dígitos
  }

  startTimer(): void {
    this.startTime = new Date();
    this.timerInterval = setInterval(() => {
      const currentTime = new Date();
      const timeDiff = currentTime.getTime() - this.startTime.getTime();

      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDiff / 1000) % 60);

      this.elapsedTime = 
        this.pad(hours, 2) + ':' +
        this.pad(minutes, 2) + ':' +
        this.pad(seconds, 2);
    }, 1000);
  }

  pad(num: number, length: number): string { // Added explicit types
    let str = num.toString();
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  }

  checkAnswer(): void {
    clearInterval(this.timerInterval); // Detener el cronómetro antes de comprobar la respuesta

    // Increment the number of questions answered
    this.questionsAnswered++;

    const correctAnswer = this.multiplicand * this.multiplier;
    if (parseInt(this.userAnswer) === correctAnswer) {
      this.smartScore += 10; // Increment SmartScore by 10 if the answer is correct
      alert(`¡Correcto! Tiempo empleado: ${this.elapsedTime}`);
    } else {
      // If the answer is incorrect, the smartScore remains unchanged
      alert(`Incorrecto, la respuesta correcta era: ${correctAnswer}. Tiempo empleado: ${this.elapsedTime}`);
    }
    
    // Reiniciar para la siguiente pregunta
    this.userAnswer = '';
    this.multiplicand = this.generateRandomNumber();
    this.multiplier = this.generateRandomNumber();
    this.startTimer(); // Reiniciar el cronómetro
  }

  ngOnDestroy(): void { // Añadir el método ngOnDestroy
    if (this.timerInterval) {
      clearInterval(this.timerInterval); // Limpiar el intervalo del cronómetro
    }
  }
}
