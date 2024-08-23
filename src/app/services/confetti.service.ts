// confetti.service.ts
import { Injectable } from '@angular/core';
import * as confetti from 'canvas-confetti';

@Injectable({
    providedIn: 'root',
})
export class ConfettiService {
    // public celebrate() {
    //     const duration = 10000;

    //     var myCanvas = document.createElement('canvas');
    //     document.body.prepend(myCanvas);

    //     var myConfetti = confetti.create(myCanvas, {
    //         resize: true,
    //         useWorker: true
    //     });

    //     myConfetti({
    //         particleCount: 200,
    //         spread: 1000,
    //         origin: { y: 0.6 },
    //         colors: ['#FF4500', '#008080', '#FFD700'],
    //     });

    //     // setTimeout(() => confetti.create(), duration);
    // }

    public celebrate() {
        const duration = 10000;

        var myCanvas = document.createElement('canvas');
        document.body.prepend(myCanvas);

        var myConfetti = confetti.create(myCanvas, {
            resize: true,
            useWorker: true
        });

        myConfetti({
            particleCount: 200,
            spread: 1000,
            origin: { y: 0.6 },
            colors: ['#FF4500', '#008080', '#FFD700'],
        });

        // setTimeout(() => confetti.create(), duration);
    }
}