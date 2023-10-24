import React from 'react'
import ListItem from './ListItem'
export default function TodoLists({ todos, setTodos }) {

    const handleDelete = (todo) => {
        setTodos(todos.filter(t => t.id !== todo.id))
    }



    return (
        <>
            {todos.map((todo) => (

                <div key={todo.id} >
                    <ListItem todo={todo} setTodos={setTodos} onDelete={handleDelete} />
                </div>

            ))}
        </>
    )
}
