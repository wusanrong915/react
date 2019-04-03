import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "antd/dist/antd.css";
import Counter from './Counter';
import TodoList from './Todolist';
//import App from './App';
//import { HashRouter as Router} from "react-router-dom";
// import CustomLink from './containers/CustomLink';
//import AuthExample from './auth/AuthExample';
//import { Divider } from 'antd';

ReactDOM.render(
    <div style={{padding:'30px'}}>
        <Counter/>
        <TodoList/>
    </div>
    ,
    document.getElementById('root')
)



// ReactDOM.render(
//     <Router>
//         <App />
//     </Router>,
//     document.getElementById('root')
//)

