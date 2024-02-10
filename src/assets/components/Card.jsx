function Card(props){
    return(
        <div style={{backgroundColor:props.bgcolor}} className="flex-grow py-7 border rounded text-center text-white">
            <h1 className="font-medium text-2xl">{props.degree}</h1>
            <p>{props.place}</p>
        </div>
    )
}
export default Card