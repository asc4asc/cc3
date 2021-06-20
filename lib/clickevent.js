import { startClock , stopClock, timeMe } from './clock.js';  
import { startChangecolor , stopChangecolor } from './changecolor.js';
let i = 1 ; 


export function startTime() {
    timeMe();
}


export function clickEvent() {

switch(i) {
    case 1:
      startClock();  
      startChangecolor();
      break; 
    default:
      stopClock(); 
      stopChangecolor();  
    }
    i=i+1; if ( i > 1 ) { i = 0; }
}
