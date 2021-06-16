import { clock } from './lib/clock.js';  

import { changecolor } from './changecolor.js';
import { i } from './changecolor.js';

export function clickevent() {
switch(i) {
    case 1:
      // conti = 0;		
      changecolor();
      break; 
    default:
      // conti = 0;				 
    }
    i=i+1; // if ( i > 1 ) { i = 0; }
}
