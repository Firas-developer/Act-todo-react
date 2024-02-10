function ListItem(props) {

    const listArr = props.listArr;
    const setListArr = props.setListArr;

    function handleDelete(deleteId) {
        const tempArr = listArr.filter((item) => {
            if (item.id === props.id) {
                return false
            }
            else {
                return true
            }
        })

        setListArr(tempArr)
    }

    return (
        <div className="flex justify-between p-1">
            <p className="text-lg">{props.index + 1}. {props.todo} </p>
            <button className="text-red-600 text-md" onClick={() => handleDelete(props.id)}>Delete</button>
        </div>
    )
}

export default ListItem