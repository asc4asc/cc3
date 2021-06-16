import { startclock , stopclock } from './clock.js';  
import { changecolor } from './changecolor.js';
let i = 1 ; 

export function clickevent() {

switch(i) {
    case 1:
      startclock();  
      changecolor();
      break; 
    default:
      stopclock();  
    }
    i=i+1; // if ( i > 1 ) { i = 0; }
}
