import { useState } from "react";

function TodoForm(props) {

    const listArr = props.listArr;
    const setListArr = props.setListArr;

    const [newListArr, setNewListArr] = useState('')

    const handleChange = (e) => {
        setNewListArr(e.target.value);
    }

    const setList = () => {
        setListArr([...listArr, { id: listArr.length + 1, todo: newListArr }])
        setNewListArr("")
    }

    return (
        <div>
            <h1 className="text-2xl font-medium mb-3">Manage activities</h1>
            <input placeholder="Enter your todo!" onChange={handleChange} value={newListArr} type="text" className="px-2 py-1 border border-black outline-none" />
            <button onClick={setList} className="bg-black text-white py-1 border border-black px-2">Add</button>
        </div>
    )
}

export default TodoForm