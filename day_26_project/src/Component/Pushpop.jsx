import React, { useState } from 'react';

const PushPop = () => {
    const [user , setuser] = useState(['shyam','gowtham','vicky','suresh','madhan']);

    const handlePush = () => {
        const newpush = [...user];
        newpush.push('ram');
        console.log(newpush);
        setuser(newpush);
    }

    const handlePop = () => {
        const newpop = [...user];
        newpop.pop();
        console.log(newpop);
        setuser(newpop);
    }
    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {user.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
            <button onClick={handlePush}>Push User</button>
            <button onClick={handlePop}>Pop User</button>
        </div>
    );
};

export default PushPop;