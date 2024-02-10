import ListItem from "./ListItem"

function TodoList(props) {

    const listArr = props.listArr
    const setListArr = props.setListArr

    return (
        <div className="bg-[#8770e1b9] px-5 py-2.5 border rounded flex-grow">
            <h1 className="text-2xl font-medium mb-1">Today's Activity</h1>
            {
                listArr.length === 0 ? <p>You haven't added any activity yet</p> : ""
            }
            {
                listArr.map((item, index) => {
                    return <ListItem todo={item.todo} index={index} id={item.id} listArr={listArr} setListArr={setListArr}></ListItem>
                })
            }
        </div>
    )

}

export default TodoList 