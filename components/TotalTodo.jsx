export default function TotalTodo({ todos, setTodos }) {

    const handleClearAll = () => {
        setTodos([])
    }

    return (
        <>
            {todos.length > 0 && <div className="font-josefin  p-3 flex justify-start items-center gap-6">
                <p>You have {todos.length} pending {todos.length > 1 ? 'tasks' : 'task'}</p>

                <button className="bg-blue-500 p-2 rounded-md text-white" onClick={handleClearAll}>Clear All</button>
            </div>}

        </>
    )
}
