'use client'

import { useState } from "react"
import { RiCalendarTodoFill } from 'react-icons/ri'
export default function CreateTodo({ setTodos }) {

    const [todo, setTodo] = useState('')

    const handleTodo = (todo) => {
        setTodo(todo)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (todo) {
            setTodos(todo)
            setTodo('')
        }
    }


    return (

        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="lg:max-w-[50%] md:max-w-[60%] w-full flex items-center max-sm:gap-1 gap-5 mt-2 p-2.5 border border-slate-400 rounded-full">
                <input
                    value={todo}
                    onChange={(e) => handleTodo(e.target.value)}
                    placeholder='Enter your todo'
                    className=" flex-1 text-base leading-normal font-josefin outline-none "
                />
                <span><RiCalendarTodoFill size={24} /></span>
            </div>

        </form>

    )
}
