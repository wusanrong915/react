import React, { Component } from 'react';
import store from './store/index';
class TodoList extends Component {
    constructor(){
        super();
        this.state=store.getState().todo;
        store.subscribe(()=>{
            this.setState({
                list:store.getState().todo.list
            })
        })
        
    }
    handleAdd=(e)=>{
        if(e.keyCode===13){
            store.dispatch({
                type:'add_item',
                value:e.target.value
            })
            e.target.value='';
        }
        
    }
    handleRemove=(idx,e)=>{
        let action = {type:'remove_item',index:idx};
        store.dispatch(action);
    }
    render() {
        return (
            <div>
                <input onKeyDown={this.handleAdd} type="text"/><br/>
                <ul>
                    {
                        this.state.list.map((item,index)=>(
                            <li key={index}>{item} <button onClick={this.handleRemove.bind(this,index)}>删除</button></li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;
