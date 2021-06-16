export let conti = 0  ;

let sec = 1 ,
      i = 1 ;

function getRndInteger(min, max) {
  return Math.floor((Math.random() * (max - min) ) + min) * 1000 ;
}

export function changecolor() {
  if ( sec == 0 ) { 
    sec = 1
    document.body.style.backgroundColor = "white"; 
  } else { 
    sec = 0 
    let i = Math.floor(Math.random() * 4);
    switch(i) {
      case 1:
        document.body.style.backgroundColor = "green"; 
        break;
      case 2:
        document.body.style.backgroundColor = "red"; 
        break;
      case 3:
        document.body.style.backgroundColor = "blue"; 
        break;	  
      default:
       document.body.style.backgroundColor = "yellow"; 
    }
  }
  if ( conti == 0 ) { 
    setTimeout(changecolor, getRndInteger(2, 5)); 
  } else {
    document.body.style.backgroundColor = "orange";
  }
}

export function clickevent() {
switch(i) {
    case 1:
      conti = 0;		
      changecolor();
      break; 
    default:
      conti = 0;				 
    }
    i=i+1; // if ( i > 1 ) { i = 0; }
}
