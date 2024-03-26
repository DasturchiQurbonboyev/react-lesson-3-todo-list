import React, { useState } from 'react';
import "./To_Do_Lists.css";
import "./Added.css";
import { TiUserDelete } from "react-icons/ti";

function To_Do_List() {

    const [delet, setDelet] = useState(false);
    const [name, setName] = useState("")
    const [data, setData] = useState([])
    const [clas, setClas] = useState("slide-out-blurred-left")

    const handleButtonClick = (id) => {
        let filteredData = data?.filter(user => user.id !== id)
        setData(filteredData)
    }
    const handleSecondAction = () => {
        setClas("slide-out-blurred-left"); // "Delete" tugmasi bosilganda class ni qaytarish
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name.trim()) {
            return alert("Iltimos ismingizni kiringing")
        }

        let newUser = { id: `user-${new Date().getTime()}`, name }
        setData(p => [...p, newUser])
        setName("")
    }
    console.log(data);

    let cards = data?.map((user) =>
        <div key={user.id} className={`added`}>
            <p>{user.name}</p>
            <TiUserDelete style={{ fontSize: "30px", cursor: "pointer" }} className='delete' onClick={() => { handleButtonClick(user.id) }} />
        </div>
    );

    return (
        <>
            <div class="login-box">
                <h2>To Do List</h2>
                <form onSubmit={handleSubmit}>
                    <div class="user-box">
                        <input value={name} onChange={(e) => {
                            setName(e.target.value)
                        }} type="text" required />
                        <label>Username</label>
                    </div>


                    <a type='submit' href="#">

                    </a>
                    <button>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Add
                    </button>

                </form>
                <div className="added__card">
                    {cards}
                </div>
            </div>
        </ >
    )
}

export default To_Do_List
