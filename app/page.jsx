'use client'

import CreateTodo from "@/components/CreateTodo";
import TodoLists from "@/components/TodoLists";
import TotalTodo from "@/components/TotalTodo";
import { useState } from "react";

let initialId = 1
export default function Home() {
  const [todos, setTodos] = useState([])
  const [selectedId, setSelectedId] = useState(0)

  const handleTodos = (todo) => {
    setTodos([

      {
        id: initialId++,
        done: false,
        todo
      },
      ...todos,
    ])
  }


  const onToggle = (todo, check) => {
    setTodos(todos.map(t => {
      if (t.id === todo.id) {
        return { ...t, done: check }
      } else {
        return { ...t }
      }
    }))


  }

  const handleDelete = (todo) => {
    setTodos(todos.filter(t => t.id !== todo.id))
  }
  return (
    <main className="max-w-4xl px-10 mx-auto">
      <CreateTodo setTodos={handleTodos} />
      <TodoLists todos={todos} setTodos={setTodos} onToggle={onToggle} handleDelete={handleDelete} />
      <TotalTodo todos={todos} setTodos={setTodos} />
    </main>
  );
}
