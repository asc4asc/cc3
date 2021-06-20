"use strict";  

// refactoring code! Better var names, less global vars!
const CountTime= 1; // example 1 min

const EndTime = 1000*60*60; 
const StartTime= (1000*60*(60-CountTime))-1000;  

let tmp1=document.querySelector("clock");

let dat=new Date(); // init var only for cases that something go wrong?
let datms1=dat.getTime()-StartTime;
let sw1 = 1; // switch1 is start count time.
let i=1; // switch beetween start and stop counter.

let datms2=dat.getTime(); // temp var for time? why?
let datms3 = 0;

// (function () {
export function timeMe() {
  var datms6 = datms1 - datms2 + EndTime;
    if ( datms6 < 0 ) { 
      datms3= 0; 
    }	
    if (i == 1 || sw1 == 1 ) { // update display
      dat = new Date();  // if dat=0 do not set it!
      datms2 = dat.getTime(); 
      dat.setTime( datms1 - datms2 );   
      if ( datms3 == 0 && sw1 == 0 ) {
	var h=0; 
	var m=0; 
	var s=0; 
	var ms=0;
      } else { 
	if ( sw1 == 0 ) { 
	  var h = dat.getHours(); 
	  var m = dat.getMinutes();
	  var s = dat.getSeconds();
	  var ms = dat.getMilliseconds(); 
        } else {
          var h=0; 
	  var m=CountTime; 
	  var s=0; 
	  var ms=0;  
        }   		
      }
      s = fuehrendeNull(s);
      tmp1.innerHTML = m + ':' + s; // + ':' + ms; // display only what is needed.
    } 
    setTimeout(timeMe, 1000);
  }

  function fuehrendeNull(zahl) {
    zahl = (zahl < 10 ? '0' : '') + zahl;
    return zahl;
  }
  function fuehrendeNullen(zahl) {
    zahl = (zahl < 10 ? '0' : '') + zahl;
    zahl = (zahl < 100 ? '0' : '') + zahl;
    return zahl;
  }
	
export function startClock() {
  dat=new Date();	  
  datms1=dat.getTime()-StartTime;
  // timeMe();
  sw1 = 0;	
    i=1; 
    dat = new Date();
    datms2 = dat.getTime(); 
    var datms4 = datms1 - datms2 + EndTime; 
    if ( datms4 > 0 ) {	  
      datms3 = datms1 - datms2 ;  
    } else {
      datms3 = 0;    
    }	
 }

export function stopClock() {
  dat=new Date();	  
  datms1=dat.getTime()-StartTime;
  sw1 = 1; 	
}
