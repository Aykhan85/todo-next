export default function TotalTodo({ todos, setTodos }) {

    const handleClearAll = () => {
        setTodos([])
    }
    const filteredTodo = todos.filter(todo => todo.done)

    return (

        < div className="flex items-center justify-start gap-6 p-3 font-josefin" >
            {todos.length > 0 && todos.length - filteredTodo.length > 0 && <p>You have {todos.length - filteredTodo.length} pending {todos.length - filteredTodo.length > 1 ? 'tasks' : 'task'}</p>}

            {todos.length > 0 && <button className="p-2 mt-2 text-white bg-blue-500 rounded-md" onClick={handleClearAll}>Clear All</button>}

        </div >


    )
}
