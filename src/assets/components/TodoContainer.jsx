import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import { useState } from "react"
function TodoContainer() {
    const [listArr, setListArr] = useState([])
    return (
        <div className="flex gap-5 flex-wrap mt-5">
            <TodoForm listArr={listArr} setListArr={setListArr} />
            <TodoList listArr={listArr} setListArr={setListArr} />
        </div>
    )
}

export default TodoContainer