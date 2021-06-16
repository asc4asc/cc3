import { startclock , stopclock } from './clock.js';  
import { startchangecolor , stopchangecolor } from './changecolor.js';
let i = 1 ; 

export function clickevent() {

switch(i) {
    case 1:
      startclock();  
      startchangecolor();
      break; 
    default:
      stopclock(); 
      stopchangecolor();  
    }
    i=i+1; // if ( i > 1 ) { i = 0; }
}
