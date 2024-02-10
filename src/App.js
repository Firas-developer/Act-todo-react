import Login from "./assets/Pages/Login"
import Signup from "./assets/Pages/Signup"
import Landing from "./assets/Pages/Landing"
import { useState } from "react"
import { BrowserRouter,Route, Routes } from 'react-router-dom'

function App() {
    const [users, setUsers] = useState([])
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login users={users} setUsers={setUsers}/>}></Route>
                    <Route path='/signup' element={<Signup users={users} setUsers={setUsers}/>}></Route>
                    <Route path='/landing' element={<Landing />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App