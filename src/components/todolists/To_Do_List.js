import React, { useState } from 'react';
import "./To_Do_Lists.css";
import "./Added.css";

function To_Do_List() {

    const [delet, setDelet] = useState(false);
    const [name, setName] = useState("")
    const [data, setData] = useState([])

    const handleButtonClick = (id) => {
        let filteredData = data?.filter(user => user.id !== id)
        setData(filteredData)
    }

    const handleSecondAction = () => {
        setDelet(true);
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
        <div key={user.id} className={`added ${delet ? "slide-out-blurred-left" : ""}`}>
            <p>{user.name}</p>
            <a onClick={() => { handleButtonClick(user.id) }}>Delete</a>
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
