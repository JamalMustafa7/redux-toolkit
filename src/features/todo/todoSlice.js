import {createSlice,nanoid} from 'redux-toolkit'
const initialState={
    todos:[{id:nanoid(),text:"Hello world"}]
}
export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:function(state,action)
        {
            const todo={id:nanoid(),text:action.payload}
            state.todos.push(todo)
        },
        removeTodo:function(state,action)
        {
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        }
    }
})
export const {addTodo,removeTodo}=todoSlice.actions
export default todoSlice.reducers