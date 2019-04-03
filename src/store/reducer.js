import {combineReducers} from 'redux';

let conuter = (state=1,action)=>{
    switch(action.type){
        case 'ADD':
            return state+1;
        case 'DEC':
            return state-1;
        default:
            return state;
    }
}
let initValue={
    list:[1,2,3,4],

}
let todo= (state=initValue,action)=>{
    switch (action.type){
        case 'add_item':
            let newState = JSON.parse(JSON.stringify(state));//Object.assign({},state)深拷贝
            newState.list.push(action.value);
            return newState;
        case 'remove_item':
             newState = JSON.parse(JSON.stringify(state));
             newState.list.splice(action.index,1);
            return newState;
        default:
            return state;
    }
}
export default combineReducers({
    todo,conuter
})