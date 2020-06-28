import React, { useState, useEffect } from "react";
function Example() {
    const [count, setCount] = useState(1);
    const [todos, setTodos] = useState([{ text: "学习 Hook", msg: "233" }]);
    useEffect(() => {
        console.log(`useEffect=>You clicked ${count} times`);
        document.title = `You clicked ${count} times`;
    });
    return (
        <div>
            <p>You clicked {count} times</p>
            <p>{todos[0].text}</p>
            <p>{todos[0].msg}</p>
            <button
                onClick={() => {
                    setCount(count + 2);
                    setTodos();
                }}
            >
                click me++
            </button>
        </div>
    );
}
export default Example;
