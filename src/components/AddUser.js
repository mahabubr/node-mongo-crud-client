import React from 'react';
import { useState } from 'react';

const AddUser = () => {

    const [user, setUser] = useState({})

    const handleAddUser = (event) => {
        event.preventDefault()

        console.log(user);

        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('user added successfully')
                    event.target.reset()
                }
                else {
                    alert('something wrong')
                }
            })
    }

    const handleInputBlur = (event) => {
        const value = event.target.value
        const field = event.target.name
        const newUser = { ...user }
        newUser[field] = value
        setUser(newUser)
    }

    return (
        <div>
            <h3>Please Add A New User</h3>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleInputBlur} type="text" name="name" placeholder='Name' />
                <br />
                <input onBlur={handleInputBlur} type="text" name="address" placeholder='Address' />
                <br />
                <input onBlur={handleInputBlur} type="email" name="email" placeholder='Email' />
                <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;