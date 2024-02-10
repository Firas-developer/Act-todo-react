import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
function Signup(props) {
    const users = props.users
    const setUsers = props.setUsers
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    function handleUser(e){
        setUsername(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }
    function addUser(){
        setUsers([...users,{UserName:username,Password:password}])
        navigate("/")
    }
    return (
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded-md flex flex-col gap-2">
                <h1 className="text-3xl font-medium">Hey Hi !</h1>
                <p>Signup here :)</p>
                <input type="text" value={username} onChange={handleUser} placeholder="Username" className="border border-black rounded bg-transparent w-fit p-1" />
                <input type="text" value={password} onChange={handlePassword} placeholder="Password" className="border border-black rounded bg-transparent w-fit p-1" />
                <input type="text" placeholder="Confirm Password" className="border border-black rounded bg-transparent w-fit p-1" />
                <button onClick={addUser} className="bg-orange-600 w-fit p-1 text-white rounded-md">Signup</button>
                <div>
                    <p>Already have an account? <Link to={"/"} className="underline text-red-400">Login</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Signup