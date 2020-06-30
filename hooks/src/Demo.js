import React, { useState } from "react";
function Example() {
    const [count, setCount] = useState(0);
    const [sex, setSex] = useState("man");
    const [work, setWork] = useState("soft");
    return (
        <div>
            <p>You clicked {sex} times</p>
            <p>You clicked {count} times</p>
            <p>You clicked {work} times</p>

            <p>You clicked {sex} times</p>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                click me
            </button>
        </div>
    );
}
export default Example;