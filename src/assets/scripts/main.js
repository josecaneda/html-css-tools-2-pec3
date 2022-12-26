/**
 * Import dependencies from node_modules
 * see commented examples below
 */


import * as bootstrap from 'bootstrap';
import Countdown  from 'ds-countdown';




/**
 * Write any other JavaScript below
 */



window.onload = function() {
    const nextConcertDate = '2023-01-08 19:00:00',;
    const nextConcertSite = ''
    const concertCountdown = document.getElementById('concert-countdown');
    

    new Countdown({
        id: 'concert-countdown',
        targetTime: nextConcertDate,
        noDay: false,
        hideDayAtZero: false,
        separator: ['dias', 'd', ],
        afterEnd() {
          // alert("Time over !")
        }
      });

      setInterval( () => {
        concertCountdown.textContent = concertCountdown.textContent.replace(':', ' días ') + ' horas';

      }, 1000);

     

   
}
 


