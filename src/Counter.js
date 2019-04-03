import React, { Component } from 'react';
import store from './store/index';
//store 连接action和reduce人的一个对象
//action 是一个对象描述state的变化
//reducer 定义了如何响应action描述的state的变化
class Counter extends Component {
    constructor(){
        super();
        this.state={
            num:store.getState().conuter
        }
        console.log(store)
        store.subscribe(()=>{
            this.setState({
                num:store.getState().conuter
            })
        });
    }
    handleAdd=()=>{
        let action ={type:'ADD',value :10}
        store.dispatch(action);
    }
    handleDec=()=>{
        let action ={type:'DEC'}
        store.dispatch(action);
    }
    handleIfodd=()=>{
        if(store.getState().conuter %2!==0){
            let action ={type:'ADD'}
            store.dispatch(action);
        }
    }
    handleAsync=()=>{
        setTimeout(function () {
            store.dispatch({ type: 'ADD' })
          }, 1000)
    }
    render() {
        return (
            <div>
                <p>
                    Clicked: <span>{this.state.num}</span> times<br/>
                    <button onClick={this.handleAdd} >+</button>
                    <button onClick={this.handleDec}>-</button><br/>
                    <button onClick={this.handleIfodd}>Increment if odd</button>
                    <button onClick={this.handleAsync}>Increment async</button>
                </p>
            </div>
        );
    }
}

export default Counter;
