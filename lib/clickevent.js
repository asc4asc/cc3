import { startclock , stopclock } from './clock.js';  

import { changecolor } from './changecolor.js';
let i = 0 ; 

export function clickevent() {
startclock();

switch(i) {
    case 1:
      changecolor();
      break; 
    default:
      stopclock();  
    }
    i=i+1; // if ( i > 1 ) { i = 0; }
}
