'use client'

import CreateTodo from "@/components/CreateTodo";
import TodoLists from "@/components/TodoLists";
import TotalTodo from "@/components/TotalTodo";
import { useState } from "react";

let initialId = 1
export default function Home() {
  const [todos, setTodos] = useState([])

  const handleTodos = (todo) => {
    setTodos([

      {
        id: initialId++,
        todo
      },
      ...todos,
    ])
  }

  return (
    <main className="px-10 max-w-4xl mx-auto">
      <CreateTodo setTodos={handleTodos} />
      <TodoLists todos={todos} setTodos={setTodos} />
      <TotalTodo todos={todos} setTodos={setTodos} />
    </main>
  );
}
