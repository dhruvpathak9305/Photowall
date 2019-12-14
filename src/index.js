import React from 'react';
import ReactDOM from 'react-dom';
// const element = React.createElement('h1',null,'Hello World');

// const element = React.createElement('strong',null,'Hello World');

// const element = React.createElement('ol',null,
// React.createElement('li',null,'first item'),
// React.createElement('li',null,'second item'),
// React.createElement('li',null,'third item'));

var tasks=['first item','second item','third item'];

const element = React.createElement('ol',null,
tasks.map((item,index)=>React.createElement('li',{key:index},item))
);

ReactDOM.render(element,document.getElementById('root'));
