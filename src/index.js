import React from 'react';
import ReactDOM from 'react-dom';

var tasks=['first item','second item','third item'];

// const element =<ol>
//     <li>First item</li>
//     <li>Second item</li>
//     <li>Third item</li>
// </ol>

//To run js code inside the html tag in jsx you have to warp it inside {}
// const element =<ol>
//      <li>{tasks[0]}</li>
//     <li>{tasks[1]}</li>
//     <li>{tasks[2]}</li>
//  </ol>

const element=<ol>
    {tasks.map((item,index)=><li key={index}>{item}</li>)}
</ol>

ReactDOM.render(element,document.getElementById('root'));
