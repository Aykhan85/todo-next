'use client'

import { useState } from "react"
import { AiOutlineDelete } from 'react-icons/ai'
export default function ListItem({ todo, onDelete, onToggle }) {

    const [checked, setChecked] = useState(false)

    const handleChecked = (e) => {
        const updatedChecked = e.target.checked
        setChecked(updatedChecked)
        onToggle(todo, updatedChecked)
    }

    return (
        <div className="flex items-center justify-start mt-3 ">
            <label className="flex gap-2 p-3 bg-slate-gray rounded-2xl">
                <input
                    type='checkbox'
                    checked={todo.done}
                    onChange={e => handleChecked(e)}
                    className='w-5'
                />
                <div className="text-xl font-josefin ">
                    {checked ? <del>{todo.todo}</del> : <p>{todo.todo}</p>}
                </div>


                <div className="self-end">
                    <button onClick={() => onDelete(todo)}>
                        <AiOutlineDelete size={20} color='gray' />

                    </button>
                </div>

            </label>


        </div>
    )
}
