import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : 'todo',


    initialState : {
        alltodos : [],
        editedTodo : {}

    },


    reducers : {




        addTodo(s,p){
            s.alltodos = [...s.alltodos,p.payload]
        },

        removeTodo(s,p){
            s.alltodos = s.alltodos.filter(e=>e.id != p.payload)
        },


        setEditTodo(s,p){
            s.editedTodo = s.alltodos.filter(e=>e.id == p.payload)
        },


        updateEditTodo(s,p){
            const updatedTodo = s.alltodos.map(
                todo=>{
                    if(todo.id === p.payload.id){
                        return p.payload
                    }else{
                        return todo
                    }
                }
            )
            s.alltodos = updatedTodo
        }


    }



})



export const {addTodo,removeTodo,setEditTodo,updateEditTodo} = todoSlice.actions;

export default todoSlice.reducer;