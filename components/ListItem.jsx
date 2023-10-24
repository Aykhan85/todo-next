'use client'

import { useState } from "react"
import { AiOutlineDelete } from 'react-icons/ai'
export default function ListItem({ todo, onDelete }) {

    const [checked, setChecked] = useState(false)

    const handleChecked = () => {
        setChecked(prev => !prev)
    }

    return (
        <div className=" mt-3 flex justify-start items-center">
            <label className="flex gap-2 bg-slate-gray p-3 rounded-2xl">
                <input
                    type='checkbox'
                    checked={checked}
                    onChange={handleChecked}
                    className='w-5'
                />
                <div className="font-josefin text-xl ">
                    {checked ? <del>{todo.todo}</del> : <p>{todo.todo}</p>}
                </div>


                <div className="self-end"><button onClick={() => onDelete(todo)}
                >
                    <AiOutlineDelete size={20} color='gray' />

                </button></div>

            </label>


        </div>
    )
}
