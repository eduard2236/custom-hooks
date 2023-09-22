import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";
import { useCounter } from "./useCounter";


const initialState = [
    /* {
      id: new Date().getTime(),
      description: 'recolectar la priedra del alma',
      done: false,
    } */
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}
export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos]);

    const handledNewTodo = (todo) => {
        const action = {
            type: '[TODO] add todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] remove todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle todo',
            payload: id
        })
    }
    const todosCount = todos.length

    const pendingTodosCount = todos.filter( todo => !todo.done).length

    return {
        todos,
        handleDeleteTodo,
        handleToggleTodo,
        handledNewTodo,
        todosCount,
        pendingTodosCount,

    }
}


