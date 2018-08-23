import React, {Component} from 'react';

import ReactDOM from 'react-dom';
import './styles/stylesheet.css';

import Main from './Components/Main';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import rootReducer from './redux/reducer';



const store = createStore(rootReducer);

const element = React.createElement('h1',null,"Simpliciti Studio!");

const tasks = ['take out the trash', 'shovel the driveway', 'walk the dog']
const elements =React.createElement('ol',null,
        tasks.map((task,index) => React.createElement('li',{key:index },task) )
    );

const element2 =
<div>
    <h1>Task List</h1>
    <ol> 
        {tasks.map((task,index) => <li key={index}>{task}</li>)}
        <li> {tasks[0]}</li>
    </ol>
</div>;



ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>,document.getElementById('root'));










