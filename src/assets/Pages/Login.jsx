import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
function Login(props) {
    const users = props.users
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [rightUser,setrightUser] = useState(true)
    var userFound = false
    const navigate = useNavigate()
    function handleUser(e){
        setUsername(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }
    function checkUser(){
        users.forEach(function(item){
            if(item.UserName === username && item.Password === password){
                console.log("Login Successfull")
                userFound = true
                navigate("/landing",{state:{user:username}})
            }
        })
        if(userFound === false){
            setrightUser(false)
        }
    }
    return (
        <div>
            <div className="bg-black p-10">
                <div className="bg-white p-10 border rounded-md flex flex-col gap-2">
                    <h1 className="text-3xl font-medium">Hey Hi !</h1>
                    {
                        rightUser?<p>I help you to manage activities after you Login :)</p>:<p className="text-red-400">Please Signup before you login</p>
                    }
                    <input value={username} onChange={handleUser} type="text" placeholder="Username" className="border border-black rounded bg-transparent w-fit p-1" />
                    <input value={password} onChange={handlePassword} type="text" placeholder="Password" className="border border-black rounded bg-transparent w-fit p-1" />
                    <button onClick={checkUser} className="bg-violet-400 w-fit p-1 text-white rounded-md">Login</button>
                    <div>
                        <p>Already have an account? <Link to={"/signup"} className="underline text-red-400">Signup</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login