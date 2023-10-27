import ListItem from './ListItem'
export default function TodoLists({ todos, handleDelete, onToggle }) {
    return (
        <>
            {todos.map((todo) => (

                <div key={todo.id} >
                    <ListItem todo={todo} onDelete={handleDelete} onToggle={onToggle} />
                </div>

            ))}
        </>
    )
}
