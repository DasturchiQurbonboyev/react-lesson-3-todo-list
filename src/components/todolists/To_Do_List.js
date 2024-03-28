import React, { useState, useEffect } from 'react';
import "./To_Do_Lists.css";
import "./Added.css";
import { TiUserDelete } from "react-icons/ti";

function To_Do_List() {
    const [name, setName] = useState("");
    const [clas, setClas] = useState("slide-out-blurred-left")
    const [data, setData] = useState(() => {
        const storedData = localStorage.getItem('todoListData');
        return storedData ? JSON.parse(storedData) : [];
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) {
            return alert("Iltimos ismingizni kiritng");
        }
        const newUser = { id: `user-${new Date().getTime()}`, name };
        setData([...data, newUser]);
        setName("");
    };

    const handleSecondAction = () => {
        setClas("slide-out-blurred-left");
    }

    const handleDelete = (id) => {
        const updatedData = data.filter(user => user.id !== id);
        setTimeout(() => {
            setData(updatedData);
        }, 600);
    };

    useEffect(() => {
        localStorage.setItem('todoListData', JSON.stringify(data));
    }, [data]);

    const cards = data.map((user) => (
        <div key={user.id} className={`added ${user.id}`} >
            <p>{user.name}</p>
            <div className='dell'>
                <TiUserDelete
                    style={{ fontSize: "30px", cursor: "pointer" }}
                    className='delete'
                    onClick={() => {
                        handleSecondAction(document.querySelector("." + user.id).classList.add("slide-out-blurred-left"));
                        handleDelete(user.id)
                    }}
                />
            </div>
        </div>
    ));

    return (
        <div className="login-box">
            <h2>To Do List</h2>
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        required
                    />
                    <label>Username</label>
                </div>
                <button type='submit'>Add</button>
            </form>
            <div className="added__card">{cards}</div>
        </div>
    );
}

export default To_Do_List;
