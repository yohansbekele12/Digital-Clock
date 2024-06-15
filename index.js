
//Digital Clock

 function Updateclock(){
    const now=new Date();               // to set the digit shown on the clockj to 2 digit always we use builtin function
    //                                          .toString.padstart(2, '0')

    let hour=now.getHours().toString().padStart(2, 0);
    hour=hour>=12?hour-12:hour;    // this will keep hour in 12 hour format 
    const minute=now.getMinutes().toString().padStart(2, 0);
    const second=now.getSeconds().toString().padStart(2, 0);
    const am_pm=hour>=12?'PM':'AM';              // this decide if it's  AM or PM
    const timestring=`${hour}:${minute}:${second} ${am_pm}`;
    document.getElementById('clock').textContent = timestring;
 }
 // display now clock
 Updateclock();

 // setting timeinterval 

 setInterval(Updateclock, 1000);