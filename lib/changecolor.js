let conti = 0 ,
    sec = 1 ,
    i = 1 ;

function getRndInteger(min, max) {
  return Math.floor((Math.random() * (max - min) ) + min) * 1000 ;
}

function changeColor() {
  if ( conti == 0 ) { 
    setTimeout(changeColor, getRndInteger(2, 5)); 
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
  } 
}

export function stopChangecolor() {
  document.body.style.backgroundColor = "orange";  
  conti = 1 ;
}

export function startChangecolor() {
  conti = 0 ;
  changeColor() ;  
}
