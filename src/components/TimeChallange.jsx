import React from 'react'

let currDate = new Date(2022, 9, 12, 20);
currDate = currDate.getHours();
let greeting = '';
let cssStyle = { };

if (currDate >= 1 && currDate<12 ) {
      greeting = 'Good Morning';
      cssStyle.color='green';
} else  if( currDate >=12 && currDate < 19 ){
      greeting = 'Good Afternoon';
      cssStyle.color='orange';
} else {
      greeting = 'Good Evening';
      cssStyle.color='black';
}

export default function TimeChallange() {

  return (
    <div className='Greeting'>
      <h1 className='Greeting-heading'> Hello Sir, <span style={cssStyle} > {greeting} </span> </h1>
    </div>
  )
}
